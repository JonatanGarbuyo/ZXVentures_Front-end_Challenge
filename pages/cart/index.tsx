import CartItemCard from '../../components/CartItemCard'
import Recomended from '../../components/Recomended'
import { Heading } from '../../components/styles/Heading.styled'
import { Main } from '../../components/styles/Main.styled'

import { formatCurrency } from 'utils/helperFunctions'
import Checkout from '@components/Checkout'
import { TotalContainer } from '@components/styles/TotalContainer.styled'

const items = [
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
]

const recomendedProducts = [
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

export default function CartComponent() {
  return (
    <Main>
      <div>
        {items.map((item) => (
          <CartItemCard item={item} key={item.product_id} imageSize="medium" />
        ))}

        <Heading id="Total">
          <TotalContainer>
            <span>Total: </span>
            <span>{formatCurrency(50)}</span>
          </TotalContainer>
        </Heading>

        <Checkout />
      </div>
      <Recomended recomendedProducts={recomendedProducts} />
    </Main>
  )
}
