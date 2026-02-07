import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&family=Noto+Serif+JP:wght@200..900&family=Zen+Old+Mincho:wght@600;700&display=swap" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}