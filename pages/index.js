import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* The iframe element should be placed above the Header component */}
        <iframe
          style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-project-0-oecfb/embed/charts?id=65e203af-0286-44f7-8a51-145838d646a6&maxDataAge=3600&theme=light&autoRefresh=true"
        />

        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing {`pages/index.js`}.
        </p>
      </main>

      <Footer />
    </div>
  )
}
