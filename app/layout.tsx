import '../styles/globals.css';
import Header from './Header';
import Providers from './Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Providers>
        <head />
        <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
          <Header />
          <div>{children}</div>
        </body>
      </Providers>
    </html>
  );
}
