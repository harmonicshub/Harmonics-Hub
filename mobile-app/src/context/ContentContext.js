import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchContent } from "../api";
import { defaultContent } from "../data/siteContent";

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isRemote, setIsRemote] = useState(false);

  async function loadContent({ silent = false } = {}) {
    if (!silent) {
      setLoading(true);
    }

    try {
      const nextContent = await fetchContent();
      setContent(nextContent);
      setIsRemote(true);
    } catch (error) {
      setContent(defaultContent);
      setIsRemote(false);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadContent();
  }, []);

  const value = useMemo(
    () => ({
      content,
      loading,
      refreshing,
      isRemote,
      refresh() {
        setRefreshing(true);
        return loadContent({ silent: true });
      }
    }),
    [content, loading, refreshing, isRemote]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within ContentProvider");
  }
  return context;
}
