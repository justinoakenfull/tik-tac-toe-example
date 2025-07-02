# Modern Tic‑Tac‑Toe React App

A sleek, responsive Tic‑Tac‑Toe game built with React and modern CSS. Customize your board’s accent colour on the fly using the built‑in colour wheel picker.

---

## Features

* **Responsive 3×3 grid**: Auto‑scales to any viewport via CSS Grid and `aspect-ratio`.
* **Dynamic accent**: Change the primary accent colour at runtime with a native colour picker.
* **Modern UI**: Rounded corners, soft shadows, smooth hover/active effects.
* **Accessible**: Keyboard‑focus styles, semantic HTML.
* **Easy customization**: All theme values exposed as CSS custom properties.

---

## Getting Started

### Prerequisites

* [Node.js (v14+)?](https://nodejs.org/)
* npm or Yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/justinoakenfull/tik-tac-toe-example.git
cd tic‑tac‑toe-react

# Install dependencies
npm install
# or
yarn install
```

### Running Locally

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will reload automatically on changes.

---

## Usage

1. Click any square to place **X** or **O**.
2. Watch for win or draw notifications in the status bar.
3. Click **Go to game start** to reset.
4. Use the **Accent Colour** picker (bottom‑right) to choose a new theme colour.

---

## Theme & Colour Scheme

All theme values live in `./src/styles.css` as CSS variables. You can override them in your own stylesheet or via the colour picker.

| Variable       | Default                      | Description                               |
| -------------- | ---------------------------- | ----------------------------------------- |
| `--accent`     | `#5c5ec4`                    | Primary brand colour (buttons, highlights) |
| `--bg-page`    | `#f0f2f5`                    | Page background                           |
| `--bg-board`   | `#ffffff`                    | Board container background                |
| `--bg-square`  | `#fafafa`                    | Individual square background              |
| `--shadow-sm`  | `0 2px 4px rgba(0,0,0,0.05)` | Small shadow for depth                    |
| `--shadow-md`  | `0 4px 8px rgba(0,0,0,0.1)`  | Medium shadow for hover/active            |
| `--shadow-lg`  | `0 8px 16px rgba(0,0,0,0.15)`  | Large shadow for hover/active            |
| `--radius`     | `0.5rem`                     | Border radius                             |
| `--gap`        | `0.75rem`                    | Grid gap and spacing                      |
| `--font-base`  | `1rem`                       | Base font size                            |
| `--font-large` | `clamp(1.5rem, 6vmin, 3rem)` | Dynamic font for squares                  |

To add or modify variables, edit the `:root` block in `./src/styles.css`.

---

## 🤝 Contributing

If you REALLY feel like it...

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Please ensure code is linted and formatted before submitting.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
