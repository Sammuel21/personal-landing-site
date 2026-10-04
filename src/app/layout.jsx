import "./globals.css";

export const metadata = {
  title: "Personal Portfolio",
  description: "A collection of my projects and work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
