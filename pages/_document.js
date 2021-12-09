import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="text-gray-800 font-poppins py-20 px-32">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
