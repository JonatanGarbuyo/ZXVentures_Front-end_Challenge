import { ChangeEvent } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import ProductCard from '../components/ProductCard'
import ProductsFilter from '../components/ProductsFilter'
import { Heading } from '../components/styles/Heading.styled'
import { ProductsContent } from '../components/styles/ProductsContent.styled'
import { ProductItem } from '../types'
import { ProductsList } from '../components/styles/ProductsList.styled'
import Recomended from '../components/Recomended'
import { Main } from '../components/styles/Main.styled'

const categories = [
  'todos',
  'aguas',
  'vinos',
  'cervezas',
  'gaseosas',
  'mas vendidos',
]

const products: ProductItem[] = [
  {
    product_id: '4854058319917',
    variant_id: '33619202211885',
    total_price: '283.50',
    price_per_unit: '283.5',
    list_price_id: '7',
    sku: 'Combo Gaseosas Latas 354',
    categories: ['gaseosas'],
    units_per_pack: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Gaseosa_Latas.jpg?v=1585767272',
    handle:
      '7up-light-paso-de-los-toros-pomelo-pepsi-black-6pack-354ml-por-variedad',
    compare_at_price: '630.00',
    allowed_packs: [1, 2, 3],
    name: '7up Light & Paso de los toros Pomelo & Pepsi Black. (6pack 354ml por variedad)',
    description: '',
    discount_percentage: 55.00000000000001,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854058647597',
    variant_id: '33619204177965',
    total_price: '806.40',
    price_per_unit: '806.4',
    list_price_id: '7',
    sku: 'Combo Patagonia Latas 473',
    categories: ['cervezas'],
    units_per_pack: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Patagonia_Latas.jpg?v=1585767274',
    handle: 'copy-of-patagonia-710ml-hoppy-lager-ipa-24-7-bohemian-pilsener-1',
    compare_at_price: '2016.00',
    allowed_packs: [1, 2, 3],
    name: 'Incluye un 6pack por variedad de: IPA 24.7; Amber Lager; Weisse. Total 18 Latas',
    description: '',
    discount_percentage: 60,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854058942509',
    variant_id: '33619205554221',
    total_price: '501.60',
    price_per_unit: '501.6',
    list_price_id: '7',
    sku: 'Combo Porron 330',
    categories: ['cervezas'],
    units_per_pack: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Porron.jpg?v=1585767275',
    handle: 'copy-of-patagonia-710ml-hoppy-lager-ipa-24-7-bohemian-pilsener',
    compare_at_price: '912.00',
    allowed_packs: [1, 2, 3],
    name: 'Incluye un 6pack de Corona y uno de Stella Artois. Total 12',
    description: 'Botellas',
    discount_percentage: 44.99999999999999,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854059270189',
    variant_id: '33619206242349',
    total_price: '726.00',
    price_per_unit: '726',
    list_price_id: '7',
    sku: 'Combo Mix Latas 473',
    categories: ['cervezas'],
    units_per_pack: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Mix_Latas.jpg?v=1585767277',
    handle: 'copy-of-andes-origen-473ml-roja-rubia-ipa-6pack-de-cada-variedad',
    compare_at_price: '1650.00',
    allowed_packs: [1, 2, 3],
    name: 'Incluye un 6pack de 473ml  de cada producto de : Stella ; Budweiser; Quilmes ; 1890. Total 24 Latas',
    description: '',
    discount_percentage: 56.00000000000001,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854059663405',
    variant_id: '33619207290925',
    total_price: '1299.10',
    price_per_unit: '1299.1',
    list_price_id: '7',
    sku: 'Combo Patagonia 710Fiestas',
    categories: ['cervezas'],
    units_per_pack: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Patagonia_Botella.jpg?v=1585767279',
    handle: 'combo-patagonia-botella-hoppy-lager-ipa-24-7-bohemian-pilsener',
    compare_at_price: '2598.00',
    allowed_packs: [1, 2, 3],
    name: 'Incluye un 6pack por variedad de: Hoppy Lager; IPA 24.7; Bohemian Pilsener. Total 18',
    description: 'Botellas.',
    discount_percentage: 49.99615088529639,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854059991085',
    variant_id: '33619207749677',
    total_price: '696.54',
    price_per_unit: '696.54',
    list_price_id: '7',
    sku: 'Combo Andes Origen Latas 473',
    categories: ['cervezas', 'mas vendidos'],
    units_per_pack: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Andes.jpg?v=1585767280',
    handle: '6pack-andes-origen-473ml-roja-rubia-ipa',
    compare_at_price: '1482.00',
    allowed_packs: [1, 2, 3],
    name: 'Incluye un 6pack de 473ml  de cada variedad de : Roja; Rubia; IPA. Total 18 Latas',
    description: '',
    discount_percentage: 53,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854060384301',
    variant_id: '33619208568877',
    total_price: '477.03',
    price_per_unit: '26.5',
    list_price_id: '7',
    sku: 'AGM-18743-06-18',
    categories: ['aguas'],
    units_per_pack: 18,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-aguas-nestle-1500_453bed56-0d09-4d78-9ab9-19e46df8847d.jpg?v=1585767282',
    handle: 'copy-of-agua-mineral-sin-gas-nestle-pureza-vital-1500ml',
    compare_at_price: '954.00',
    allowed_packs: [1, 2, 3],
    name: 'Agua Mineral sin Gas Nestle Pureza Vital',
    description: '1500ml',
    discount_percentage: 49.99685534591195,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854060744749',
    variant_id: '33619210272813',
    total_price: '349.80',
    price_per_unit: '29.15',
    list_price_id: '7',
    sku: 'CZA-2121-24-12',
    categories: ['aguas'],
    units_per_pack: 12,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-quilmes-lata-354-clasica.jpg?v=1585767284',
    handle: 'cerveza-quilmes-clasica-lata-354ml',
    compare_at_price: '636.02',
    allowed_packs: [1, 2, 3],
    name: 'Cerveza Quilmes Clásica Lata',
    description: '354ml',
    discount_percentage: 45.00172950536147,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854061170733',
    variant_id: '33619210829869',
    total_price: '300.00',
    price_per_unit: '50',
    list_price_id: '7',
    sku: 'CZA-7633-24-06',
    categories: ['cervezas'],
    units_per_pack: 6,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-brahma-lata-354-clasica.jpg?v=1585767286',
    handle: 'cerveza-brahma-clasica-lata-354ml',
    compare_at_price: '342.01',
    allowed_packs: [1, 2, 3],
    name: 'Cerveza Brahma Clásica Lata',
    description: '354ml',
    discount_percentage: 12.283266571152888,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854062383149',
    variant_id: '33619213189165',
    total_price: '936.00',
    price_per_unit: '78',
    list_price_id: '7',
    sku: 'CZA-19498-24-12',
    categories: ['cervezas'],
    units_per_pack: 12,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-patagonia-lata-473-weisse.jpg?v=1585767292',
    handle: 'cerveza-patagonia-weisse-473ml',
    compare_at_price: '1560.00',
    allowed_packs: [1, 2, 3],
    name: 'Cerveza Patagonia Weisse',
    description: '473ml',
    discount_percentage: 40,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854062907437',
    variant_id: '33619213877293',
    total_price: '468.00',
    price_per_unit: '78',
    list_price_id: '7',
    sku: 'CZA-16225-24-6',
    categories: ['cervezas'],
    units_per_pack: 6,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-patagonia-lata-473-vera-ipa_OK.jpg?v=1585767295',
    handle: 'cerveza-patagonia-vera-ipa-473ml',
    compare_at_price: '672.00',
    allowed_packs: [1, 2, 3],
    name: 'Cerveza Patagonia Vera Ipa',
    description: '473ml',
    discount_percentage: 30.357142857142854,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854063431725',
    variant_id: '33619215188013',
    total_price: '1404.00',
    price_per_unit: '87.75',
    list_price_id: '7',
    sku: 'UNG-1659-06-16',
    categories: ['gaseosas', 'mas vendidos'],
    units_per_pack: 16,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-H2O-citrus-2250.jpg?v=1585767297',
    handle: 'gaseosa-h2oh-citrus-2250ml',
    compare_at_price: '2160.00',
    allowed_packs: [1, 2, 3],
    name: 'Gaseosa H2OH! Citrus',
    description: '2250ml',
    discount_percentage: 35,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854063562797',
    variant_id: '33619216203821',
    total_price: '2106.00',
    price_per_unit: '87.75',
    list_price_id: '7',
    sku: 'UNG-8067-06-24',
    categories: ['gaseosas'],
    units_per_pack: 24,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-H2O-limoneto-2250.jpg?v=1585767300',
    handle: 'gaseosa-h2oh-limoneto-2250ml',
    compare_at_price: '3240.00',
    allowed_packs: [1, 2, 3],
    name: 'Gaseosa H2OH! Limoneto',
    description: '2250ml',
    discount_percentage: 35,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854063857709',
    variant_id: '33619216695341',
    total_price: '480.04',
    price_per_unit: '20',
    list_price_id: '7',
    sku: 'UNG-744-24-24',
    categories: ['gaseosas'],
    units_per_pack: 24,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-paso-toros-tonica-lata.jpg?v=1585767302',
    handle: 'gaseosa-paso-de-los-toros-tonica-lata-354ml',
    compare_at_price: '960.00',
    allowed_packs: [1, 2, 3],
    name: 'Gaseosa PDT Tónica Lata',
    description: '354ml',
    discount_percentage: 49.99583333333334,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854064316461',
    variant_id: '33619218497581',
    total_price: '480.04',
    price_per_unit: '20',
    list_price_id: '7',
    sku: 'UNG-5322-24-24',
    categories: ['gaseosas', 'mas vendidos'],
    units_per_pack: 24,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-paso-toros-lata.jpg?v=1585767305',
    handle: 'gaseosa-paso-de-los-toros-pomelo-lata-354ml',
    compare_at_price: '960.00',
    allowed_packs: [1, 2, 3],
    name: 'Gaseosa PDT Pomelo Lata',
    description: '354ml',
    discount_percentage: 49.99583333333334,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854064447533',
    variant_id: '33619218726957',
    total_price: '120.01',
    price_per_unit: '20',
    list_price_id: '7',
    sku: 'UNG-5294-24-06',
    categories: ['gaseosas'],
    units_per_pack: 6,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-7up-light-lata.jpg?v=1585767308',
    handle: 'gaseosa-7up-light-lata-354ml',
    compare_at_price: '240.00',
    allowed_packs: [1, 2, 3],
    name: 'Gaseosa 7Up Light Lata',
    description: '354ml',
    discount_percentage: 49.99583333333334,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854064644141',
    variant_id: '33619219120173',
    total_price: '480.04',
    price_per_unit: '20',
    list_price_id: '7',
    sku: 'UNG-701-24-24',
    categories: ['gaseosas', 'mas vendidos'],
    units_per_pack: 24,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-7up-lata.jpg?v=1585767310',
    handle: 'gaseosa-7up-lata-354ml',
    compare_at_price: '960.00',
    allowed_packs: [1, 2, 3],
    name: 'Gaseosa 7Up Lata',
    description: '354ml',
    discount_percentage: 49.99583333333334,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854065004589',
    variant_id: '33619220463661',
    total_price: '600.00',
    price_per_unit: '100',
    list_price_id: '7',
    sku: 'UNG-13952-24-06',
    categories: ['gaseosas'],
    units_per_pack: 6,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-pepsi-black-lata.jpg?v=1585767312',
    handle: 'gaseosa-pepsi-black-lata-354ml',
    compare_at_price: '240.00',
    allowed_packs: [1, 2, 3],
    name: 'Gaseosa Pepsi Black Lata',
    description: '354ml',
    discount_percentage: 0,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854065528877',
    variant_id: '33619221741613',
    total_price: '480.04',
    price_per_unit: '20',
    list_price_id: '7',
    sku: 'UNG-732-24-24',
    units_per_pack: 24,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-pepsi-lata.jpg?v=1585767315',
    handle: 'gaseosa-pepsi-lata-354ml',
    compare_at_price: '960.00',
    allowed_packs: [1, 2, 3],
    name: 'Gaseosa Pepsi Lata',
    description: '354ml',
    discount_percentage: 49.99583333333334,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854065725485',
    variant_id: '33619222200365',
    total_price: '475.20',
    price_per_unit: '39.6',
    list_price_id: '7',
    sku: 'CZA-19534-24-12',
    categories: ['cervezas', 'mas vendidos'],
    units_per_pack: 12,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/sec-quilmes-lata-473-red-lager.jpg?v=1585767316',
    handle: 'cerveza-quilmes-red-lager-lata-473ml',
    compare_at_price: '792.00',
    allowed_packs: [1, 2, 3],
    name: 'Cerveza Quilmes Red Lager Lata',
    description: '473ml',
    discount_percentage: 40,
    size: 1000,
    price_per_litre: '201',
  },
  {
    product_id: '4854053732397',
    variant_id: '33619193593901',
    total_price: '2865.60',
    price_per_unit: '159.2',
    list_price_id: '7',
    sku: 'VINO-9992-6-18',
    categories: ['vinos'],
    units_per_pack: 18,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/SEC-Vinos-Capriccio-Dolcezza.jpg?v=1585767250',
    handle: 'vino-capriccio-dolcezza-750-ml-blanco',
    compare_at_price: '3582.00',
    allowed_packs: [1, 2, 3],
    name: 'Vino Capriccio Dolcezza 750 ml -',
    description: 'Blanco',
    discount_percentage: 20.000000000000004,
    size: 750,
    price_per_litre: '30',
  },
  {
    product_id: '4854054289453',
    variant_id: '33619194445869',
    total_price: '681.60',
    price_per_unit: '113.6',
    list_price_id: '7',
    sku: 'VINO-9990-6-6',
    categories: ['vinos'],
    units_per_pack: 6,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/SEC-Vinos-Novecento-Cabernet_200x200_3b7060b4-48bf-4abe-a8ad-2f9b80f5b937.jpg?v=1590155481',
    handle: 'copy-of-vino-novecento-750-ml-tinto-malbec',
    compare_at_price: '852.00',
    allowed_packs: [1, 2, 3],
    name: 'Vino Novecento 750 ml - Tinto Cabernet Sauvignon',
    description: '',
    discount_percentage: 20,
    size: 750,
    price_per_litre: '30',
  },
  {
    product_id: '4854054682669',
    variant_id: '33619195002925',
    total_price: '912.00',
    price_per_unit: '152',
    list_price_id: '7',
    sku: 'VINO-9991-6-6',
    categories: ['vinos', 'mas vendidos'],
    units_per_pack: 6,
    image_url:
      'https://cdn.shopify.com/s/files/1/0257/2242/1293/products/SEC-Vinos-Novecento-Raices-Cabernet.jpg?v=1585767255',
    handle: 'vino-novecento-raices-750-ml-tinto-cabernet-sauvignon',
    compare_at_price: '1140.00',
    allowed_packs: [1, 2, 3],
    name: 'Vino Novecento Raices 750 ml - Tinto Cabernet Sauvignon',
    description: '',
    discount_percentage: 20,
    size: 750,
    price_per_litre: '30',
  },
]

const recomendedProducts = products.filter((product) =>
  product.categories?.includes('mas vendidos')
)

const Index: NextPage = () => {
  function handleSelectCategory(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Front-end Challenge</title>
        <meta
          content="Build a product list with a sample database of products (real products!) we use here in Siempre en Casa."
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Main>
        <ProductsContent>
          <Heading>Productos</Heading>
          <ProductsFilter
            categories={categories}
            onChange={handleSelectCategory}
          />
          {
            // <SortBy>sort</SortBy>
            <ProductsList>
              {products.map((product) => (
                <ProductCard
                  key={product.product_id}
                  product={product}
                  imageSize="medium"
                />
              ))}
            </ProductsList>
            // <Pagination />
          }
        </ProductsContent>

        <Recomended recomendedProducts={recomendedProducts} />
      </Main>
    </>
  )
}

export default Index
