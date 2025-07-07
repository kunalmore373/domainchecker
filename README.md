
# 🌐 Domain Availability Checker

A sleek and simple web application that allows users to check the **availability of domain names** in real-time using the WhoisFreaks API. Built using **HTML5, CSS3, and vanilla JavaScript**, it provides status updates and alternative suggestions instantly.

## 📸 Preview

![image](https://github.com/user-attachments/assets/7e476fa3-b3b1-459d-a207-0f78b9880e86)

****![Screenshot 2025-07-08 005400](https://github.com/user-attachments/assets/b09a90eb-aeea-4a98-84ec-38ed4ea73014)

## 🚀 Features

* 🔍 **Real-time Domain Availability Check**
  Instantly checks whether a domain is available for registration.

* 📬 **Smart Suggestions**
  Displays up to 5 suggested domain names when the input is already taken.

* ⚡ **Fast & Lightweight**
  Uses async JavaScript and fetch API with no external dependencies.

* 🎨 **Gradient UI Design**
  Clean and responsive UI using modern gradient styling.

---

## 📊 Technologies Used

| Tech            | Description                       |
| --------------- | --------------------------------- |
| HTML5           | Markup language                   |
| CSS3            | Styling with Flexbox & Gradients  |
| JavaScript ES6  | Logic and API integration         |
| WhoisFreaks API | Domain availability + suggestions |

---

## ⚙️ How It Works

1. The user enters a domain name (e.g., `example.com`) in the input field.
2. On clicking the **search button**, a `fetch()` call is made to the WhoisFreaks API.
3. The response returns the **domain availability** status.
4. If the domain is taken:

   * A ❌ message is shown.
   * Up to 5 alternative suggestions are displayed.
5. If the domain is available:

   * A ✅ message is shown.

---

## 📈 Project Statistics

* 🧠 Pure JavaScript logic — no external frameworks
* 🗂️ Files: 3 (HTML, CSS, JS)
* 🔗 API Used: WhoisFreaks (Free Tier)
* 🧪 Domain status checked in real-time
* ⚡ Fully responsive and mobile-friendly
* ⏱️ Updates within \~1 second after input

---

## 📌 Future Enhancements

* 🌐 Allow filtering by domain types (`.com`, `.org`, `.net`)
* 📜 Save search history using `localStorage`
* 🔔 Add toast notifications instead of alerts
* 📱 Improve mobile responsiveness
* 🧩 Add loading animation while fetching API data

---

## 🛠️ Installation & Usage

### 📁 Clone the repository

```bash
git clone https://github.com/yourusername/domain-checker.git
cd domain-checker
```

### 💡 Open `index.html` in a browser

No build tools or installations needed. Just open it directly:

```bash
start index.html
```

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) — you are free to use, share, and modify it.

---

## 🙋‍♂️ Author

**Kunal More**
📫 Connect with me:

* [GitHub](https://github.com/yourusername)
* [LinkedIn](https://www.linkedin.com/in/yourprofile)
