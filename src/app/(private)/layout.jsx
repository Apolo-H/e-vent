export default function PrivateLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Private</h1>
        {children}
      </body>
    </html>
  );
}
