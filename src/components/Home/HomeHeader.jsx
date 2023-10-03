import Image from "next/image";
import headerImg from "../../../public/Home-Hero-Image.jpg";
import Link from "next/link";
import Heading from "../Heading";
import BigButtons from "../BigButtons";

export default function HomeHeader() {
  return (
    <>
      <div className="navigations container flex flex-col justify-end">
        <nav className="upperNav flex items-center justify-end gap-4 text-sm text-signIn_signOnBtn mt-9">
          <Link href="/login">Zaloguj</Link>
          <Link
            href="/register"
            className="border-solid border border-yellow py-2 px-3 hover:bg-secondaryBcg"
          >
            Załóż konto
          </Link>
        </nav>
        <nav className="bottomNav flex items-center justify-end gap-6 text-lg text-text_color mt-6">
          <Link
            href="#section-1"
            className="border-solid border border-text_color py-2 px-5"
          >
            Start
          </Link>
          <Link href="#section-2">O co chodzi?</Link>
          <Link href="#section-3">O nas</Link>
          <Link href="#section-4">Refundacja i organizacje</Link>
          <Link href="#section-5">Kontakt</Link>
        </nav>
      </div>
      <header className="container flex flex-row justify-between h-screen">
        <div>
          <Image
            alt="box with a lot of things"
            src={headerImg}
            className="md: absolute md:-left-483px top-0 md:h-screen"
          />
        </div>
        <div className="w-1/2 text-4xl text-center flex flex-col justify-center items-center">
          <Heading
            title={[
              "Zacznij pomagać!",
              "Oddaj niechciane rzeczy w zaufane ręce",
            ]}
          />
          <div className="flex gap-10 mt-6">
            <BigButtons text={"oddaj rzeczy"} />
            <BigButtons text={"zorganizuj zbiórkę"} />
          </div>
        </div>
      </header>
      <section id="section-1">SEKCJA 1</section>
      <article>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        officiis, dolores omnis et quam incidunt natus, aperiam explicabo saepe
        cupiditate modi blanditiis recusandae mollitia debitis, porro enim velit
        soluta quidem! Aspernatur, nulla. Molestias blanditiis odio voluptatum,
        nobis voluptates sequi deleniti magni dolores accusantium reiciendis
        excepturi rem molestiae vitae quam quasi eius impedit laboriosam soluta,
        facere expedita libero assumenda qui aut! Sed illo maxime iste
        blanditiis non? Sint, recusandae quam? Cupiditate, quo quam, nam iusto
        atque alias molestiae eligendi assumenda, saepe suscipit possimus? Quos
        aperiam, fugit libero placeat soluta eaque cupiditate. Similique
        obcaecati necessitatibus magnam fugit non nulla, provident eos
        dignissimos natus voluptate? Consequatur dolorum laudantium ut ipsum
        laboriosam dicta. Sunt doloribus tenetur vel modi, similique consequatur
        veritatis saepe nesciunt cum. Asperiores magnam repudiandae atque
        accusantium optio. Amet atque totam eligendi vitae alias placeat a quas
        explicabo dignissimos error illo, excepturi voluptatum. Quae nulla
        cupiditate eos in mollitia, ex illo molestias! Neque, ea enim doloribus
        aut aliquam earum cum culpa reiciendis, itaque quis consequuntur at.
        Voluptates ad nobis magni vero culpa, amet accusamus odio dolore dolorem
        aperiam soluta expedita officia nostrum. Illum adipisci maiores
        consequatur possimus! Eos quia atque dicta voluptatibus delectus quas
        porro voluptas, necessitatibus saepe dolorem ut fugit a velit voluptatem
        suscipit tenetur accusantium? Asperiores distinctio nulla dignissimos
      </article>
      <section id="section-2">SEKCJA 2</section>
      <article>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        officiis, dolores omnis et quam incidunt natus, aperiam explicabo saepe
        cupiditate modi blanditiis recusandae mollitia debitis, porro enim velit
        soluta quidem! Aspernatur, nulla. Molestias blanditiis odio voluptatum,
        nobis voluptates sequi deleniti magni dolores accusantium reiciendis
        excepturi rem molestiae vitae quam quasi eius impedit laboriosam soluta,
        facere expedita libero assumenda qui aut! Sed illo maxime iste
        blanditiis non? Sint, recusandae quam? Cupiditate, quo quam, nam iusto
        atque alias molestiae eligendi assumenda, saepe suscipit possimus? Quos
        aperiam, fugit libero placeat soluta eaque cupiditate. Similique
        obcaecati necessitatibus magnam fugit non nulla, provident eos
        dignissimos natus voluptate? Consequatur dolorum laudantium ut ipsum
        laboriosam dicta. Sunt doloribus tenetur vel modi, similique consequatur
        veritatis saepe nesciunt cum. Asperiores magnam repudiandae atque
        accusantium optio. Amet atque totam eligendi vitae alias placeat a quas
        explicabo dignissimos error illo, excepturi voluptatum. Quae nulla
        cupiditate eos in mollitia, ex illo molestias! Neque, ea enim doloribus
        aut aliquam earum cum culpa reiciendis, itaque quis consequuntur at.
        Voluptates ad nobis magni vero culpa, amet accusamus odio dolore dolorem
        aperiam soluta expedita officia nostrum. Illum adipisci maiores
        consequatur possimus! Eos quia atque dicta voluptatibus delectus quas
        porro voluptas, necessitatibus saepe dolorem ut fugit a velit voluptatem
        suscipit tenetur accusantium? Asperiores distinctio nulla dignissimos
      </article>
      <section id="section-3">SEKCJA 3</section>
      <article>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        officiis, dolores omnis et quam incidunt natus, aperiam explicabo saepe
        cupiditate modi blanditiis recusandae mollitia debitis, porro enim velit
        soluta quidem! Aspernatur, nulla. Molestias blanditiis odio voluptatum,
        nobis voluptates sequi deleniti magni dolores accusantium reiciendis
        excepturi rem molestiae vitae quam quasi eius impedit laboriosam soluta,
        facere expedita libero assumenda qui aut! Sed illo maxime iste
        blanditiis non? Sint, recusandae quam? Cupiditate, quo quam, nam iusto
        atque alias molestiae eligendi assumenda, saepe suscipit possimus? Quos
        aperiam, fugit libero placeat soluta eaque cupiditate. Similique
        obcaecati necessitatibus magnam fugit non nulla, provident eos
        dignissimos natus voluptate? Consequatur dolorum laudantium ut ipsum
        laboriosam dicta. Sunt doloribus tenetur vel modi, similique consequatur
        veritatis saepe nesciunt cum. Asperiores magnam repudiandae atque
        accusantium optio. Amet atque totam eligendi vitae alias placeat a quas
        explicabo dignissimos error illo, excepturi voluptatum. Quae nulla
        cupiditate eos in mollitia, ex illo molestias! Neque, ea enim doloribus
        aut aliquam earum cum culpa reiciendis, itaque quis consequuntur at.
        Voluptates ad nobis magni vero culpa, amet accusamus odio dolore dolorem
        aperiam soluta expedita officia nostrum. Illum adipisci maiores
        consequatur possimus! Eos quia atque dicta voluptatibus delectus quas
        porro voluptas, necessitatibus saepe dolorem ut fugit a velit voluptatem
        suscipit tenetur accusantium? Asperiores distinctio nulla dignissimos
      </article>
      <section id="section-4">SEKCJA 4</section>
      <article>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        officiis, dolores omnis et quam incidunt natus, aperiam explicabo saepe
        cupiditate modi blanditiis recusandae mollitia debitis, porro enim velit
        soluta quidem! Aspernatur, nulla. Molestias blanditiis odio voluptatum,
        nobis voluptates sequi deleniti magni dolores accusantium reiciendis
        excepturi rem molestiae vitae quam quasi eius impedit laboriosam soluta,
        facere expedita libero assumenda qui aut! Sed illo maxime iste
        blanditiis non? Sint, recusandae quam? Cupiditate, quo quam, nam iusto
        atque alias molestiae eligendi assumenda, saepe suscipit possimus? Quos
        aperiam, fugit libero placeat soluta eaque cupiditate. Similique
        obcaecati necessitatibus magnam fugit non nulla, provident eos
        dignissimos natus voluptate? Consequatur dolorum laudantium ut ipsum
        laboriosam dicta. Sunt doloribus tenetur vel modi, similique consequatur
        veritatis saepe nesciunt cum. Asperiores magnam repudiandae atque
        accusantium optio. Amet atque totam eligendi vitae alias placeat a quas
        explicabo dignissimos error illo, excepturi voluptatum. Quae nulla
        cupiditate eos in mollitia, ex illo molestias! Neque, ea enim doloribus
        aut aliquam earum cum culpa reiciendis, itaque quis consequuntur at.
        Voluptates ad nobis magni vero culpa, amet accusamus odio dolore dolorem
        aperiam soluta expedita officia nostrum. Illum adipisci maiores
        consequatur possimus! Eos quia atque dicta voluptatibus delectus quas
        porro voluptas, necessitatibus saepe dolorem ut fugit a velit voluptatem
        suscipit tenetur accusantium? Asperiores distinctio nulla dignissimos
      </article>
      <section id="section-5">SEKCJA 5</section>
      <article>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        officiis, dolores omnis et quam incidunt natus, aperiam explicabo saepe
        cupiditate modi blanditiis recusandae mollitia debitis, porro enim velit
        soluta quidem! Aspernatur, nulla. Molestias blanditiis odio voluptatum,
        nobis voluptates sequi deleniti magni dolores accusantium reiciendis
        excepturi rem molestiae vitae quam quasi eius impedit laboriosam soluta,
        facere expedita libero assumenda qui aut! Sed illo maxime iste
        blanditiis non? Sint, recusandae quam? Cupiditate, quo quam, nam iusto
        atque alias molestiae eligendi assumenda, saepe suscipit possimus? Quos
        aperiam, fugit libero placeat soluta eaque cupiditate. Similique
        obcaecati necessitatibus magnam fugit non nulla, provident eos
        dignissimos natus voluptate? Consequatur dolorum laudantium ut ipsum
        laboriosam dicta. Sunt doloribus tenetur vel modi, similique consequatur
        veritatis saepe nesciunt cum. Asperiores magnam repudiandae atque
        accusantium optio. Amet atque totam eligendi vitae alias placeat a quas
        explicabo dignissimos error illo, excepturi voluptatum. Quae nulla
        cupiditate eos in mollitia, ex illo molestias! Neque, ea enim doloribus
        aut aliquam earum cum culpa reiciendis, itaque quis consequuntur at.
        Voluptates ad nobis magni vero culpa, amet accusamus odio dolore dolorem
        aperiam soluta expedita officia nostrum. Illum adipisci maiores
        consequatur possimus! Eos quia atque dicta voluptatibus delectus quas
        porro voluptas, necessitatibus saepe dolorem ut fugit a velit voluptatem
        suscipit tenetur accusantium? Asperiores distinctio nulla dignissimos
      </article>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed libero
        alias nemo eius quas nam aut perferendis inventore et aliquam,
        doloremque ipsum quasi odio laudantium neque molestias adipisci
        distinctio nostrum? Provident quia alias dicta, ea saepe neque dolore
        eius porro fugit velit deserunt ipsum eligendi vitae tenetur inventore,
        animi dignissimos beatae nobis iusto molestias repudiandae! Excepturi,
        nesciunt quas? Rerum, dolorem. Quod ad explicabo molestiae consectetur
        incidunt cumque saepe quam, modi illo dolor exercitationem blanditiis
        cum maxime aliquid nemo deleniti officia. Reprehenderit obcaecati quasi
        doloremque eum modi officia qui illum excepturi. Ut error tempora dicta
        similique laudantium odit excepturi consectetur eligendi saepe
        repudiandae voluptatibus, quibusdam, modi perspiciatis. Saepe, facere
        harum quae et reprehenderit exercitationem sed nesciunt, blanditiis
        soluta hic officia ipsum! Alias quisquam at praesentium architecto sunt
        animi ut corporis asperiores dolor? Consequatur quos iusto vel.
        Repellat, pariatur optio placeat, excepturi, dolorem ad expedita nihil
        porro consequuntur sint voluptatibus tempora minima. Consequatur dolor
        ad possimus, aliquam asperiores quo consectetur sapiente neque
        laboriosam, quae suscipit? Repellendus voluptatem temporibus mollitia,
        corrupti quasi quas expedita at id iusto doloribus quisquam delectus
        perferendis debitis soluta. Perspiciatis cum voluptatem illo
        consectetur, consequuntur doloremque distinctio? Tempora iusto ducimus
        suscipit veniam minima molestiae adipisci voluptatibus facilis magnam
        nisi, rem sequi ea iure. Quae mollitia ex deserunt quam obcaecati.
        Maiores odit a aspernatur exercitationem natus soluta sequi perferendis
        impedit, quaerat magni iusto ab placeat, vero ad amet! Suscipit commodi
        recusandae quod excepturi ipsa non nobis quae numquam nulla perferendis?
        Assumenda id perferendis magni quae iste, eveniet voluptatibus!
        Repudiandae repellendus itaque id delectus ullam debitis! Deleniti animi
        veniam, vel aliquid recusandae atque repellendus voluptatem laboriosam
        dolorum hic. Quos, ipsa debitis? Esse aliquam dolorum autem impedit
        modi, perferendis veniam eveniet expedita totam, vitae labore suscipit
        numquam eaque. Impedit aliquam laudantium, eius, commodi, incidunt cum
        hic amet ut nostrum dolorem voluptas molestias. Id pariatur culpa quasi
        eius quaerat explicabo labore omnis laboriosam natus doloribus
        repellendus nisi recusandae, quia optio. Aut voluptatum amet similique
        corporis voluptatibus! Voluptates eius nemo repudiandae dolorum enim.
        Earum. In rem reiciendis temporibus qui, aliquam error exercitationem
        tempore neque nobis dicta voluptatibus sequi ratione deserunt voluptatem
        asperiores fugiat eveniet dolor placeat hic ipsam facere culpa? Maiores
        suscipit dolore illum? Blanditiis sunt voluptate dolorem cumque
        aspernatur quis tempora? Molestias eligendi accusamus ratione fuga,
        saepe atque quod vero omnis aspernatur, ullam facere quasi mollitia
        asperiores modi porro, culpa numquam recusandae nesciunt! Obcaecati,
        dolorem quas eum beatae quibusdam aspernatur iure quod illo nulla
        sapiente, tempora non similique maiores maxime! Deleniti temporibus
        consequuntur magnam dolores corrupti aliquam laboriosam, voluptatum,
        aliquid natus eveniet ratione! Esse, mollitia quasi quos voluptas
        voluptate distinctio, cupiditate delectus velit ipsum tempore
        dignissimos quaerat laboriosam dolorum consequuntur nesciunt repellat
        illum est dolores reiciendis magnam porro deleniti laborum soluta culpa?
        Illo! Eum quibusdam sapiente, inventore sunt veritatis provident
      </p>
    </>
  );
}
