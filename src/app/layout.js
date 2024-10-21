import "./globals.css";

export const metadata = {
  title: "قهوه خانه - nextCoffe",
  description: "Nhadipour Test Project",
  icons: {
    icon:"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36190/coffee-logo-clipart-md.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
