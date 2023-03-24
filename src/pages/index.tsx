/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import HeroImage from "../../public/assets/hero.jpg";
import Button from "@/components/Button";
import ImageSwitcher from "@/components/ImageSwitcher";
import { motion } from "framer-motion";
export default function Home() {
  const mainProductId = 1;
  return (
    <>
      <Head>
        <title>E-Commerce SQLi Formation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="space-y-[120px]">
        <section className="bg-[url('/assets/hero.jpg')] bg-no-repeat w-full h-[90vh] bg-cover flex flex-col items-center justify-center gap-10 bg-fixed">
          <h1 className="text-white text-5xl font-bold">
            New Work Canvas - $310
          </h1>
          <Button>
            <a href={`/product/${mainProductId}`}>Shop this item</a>
          </Button>
        </section>
        <motion.section className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 gap-[200px] items-stretch ">
          <ImageSwitcher
            title={"Grey & White"}
            images={["/assets/showCase1_1.jpg", "/assets/showCase1_2.jpg"]}
          />
          <div className="justify-center gap-8 max-w-[360px] flex flex-col h-[700px]">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl"
            >
              Grey & White
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Sed dictum consequat volutpat. Suspendisse et rutrum elit.
              Pellentesque ante velit, scelerisque eget viverra hendrerit,
              vestibulum a mauris. Mauris eu massa lacus. Nunc pulvinar feugiat
              dolor at porttitor.
            </motion.p>
            <Button
              animation={{
                x: 20,
                delay: 0.1,
              }}
              type="secondary"
            >
              <a href={`/product/${mainProductId}`} className="inline-block">
                Shop this item
              </a>
            </Button>
          </div>
        </motion.section>
        <section className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 gap-[200px] items-stretch ">
          <div className="justify-center items-center gap-8 max-w-[360px] flex flex-col h-[700px]  text-center">
            <div className="w-[250px] h-[250px] rounded-full overflow-hidden relative">
              <img
                src="/assets/showCase2_3.jpg"
                alt="showcase"
                className="object-cover"
              />
            </div>
            <p>
              Maecenas mattis libero ut nibh finibus varius. Sed sit amet
              scelerisque urna, et viverra orci.
            </p>
            <Button type="secondary">
              <a href={`/product/${mainProductId}`} className="inline-block">
                Shop this item
              </a>
            </Button>
          </div>
          <ImageSwitcher
            title={"Two colored"}
            images={["/assets/showCase2_1.jpg", "/assets/showCase2_2.jpg"]}
          />
        </section>
        <section className="container mx-auto grid grid-cols-2 gap-[30px] px-20">
          <img src="/assets/showCase3_1.jpg" alt="showCase" />

          <img src="/assets/showCase3_2.jpg" alt="showCase" />
        </section>
        <section className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 gap-[200px] items-stretch ">
          <ImageSwitcher
            title={"Plain & Simple"}
            images={["/assets/showCase4_1.jpg", "/assets/showCase4_2.jpg"]}
          />
          <div className="justify-center gap-8 max-w-[360px] flex flex-col h-[700px]">
            <h3 className="text-2xl">Plain & Simple</h3>
            <p>
              Sed dictum consequat volutpat. Suspendisse et rutrum elit.
              Pellentesque ante velit, scelerisque eget viverra hendrerit,
              vestibulum a mauris. Mauris eu massa lacus. Nunc pulvinar feugiat
              dolor at porttitor.
            </p>
            <Button type="secondary">
              <a href={`/product/${mainProductId}`} className="inline-block">
                Shop this item
              </a>
            </Button>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-secondary text-3xl font-semibold">
            New Work Canvas - $310
          </h1>
          <Button type="secondary">
            <a href={`/product/${mainProductId}`}>Shop this item</a>
          </Button>
        </section>
        <section className="h-[200px] bg-secondary"></section>
      </main>
    </>
  );
}
