const API_BASE_URL =
  (process.env.EXPO_PUBLIC_API_BASE_URL || "https://harmonicshub.com/api").replace(/\/$/, "");

export const endpoints = {
  content: `${API_BASE_URL}/content.php`,
  submit: `${API_BASE_URL}/submit.php`
};

export async function fetchContent() {
  const response = await fetch(endpoints.content, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.ok === false || !data.data) {
    throw new Error(data.message || "We could not load live content right now.");
  }

  return data.data;
}

export async function submitForm(payload) {
  const response = await fetch(endpoints.submit, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.ok === false) {
    throw new Error(data.message || "We could not submit your request right now.");
  }

  return data;
}
