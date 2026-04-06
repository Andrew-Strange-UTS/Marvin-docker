//client/src/app/layout.js
export const metadata = {
    title: 'Marvin',
    description: 'Marvin — Web Test Automation',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
          {children}
        </body>
      </html>
    );
  }
