import { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { CardButton } from '../../components/styles/CardButton.styled'
import { CardHeading } from '../../components/styles/CardHeading.styled'
import { Heading } from '../../components/styles/Heading.styled'
import { ImageContainer } from '../../components/styles/ImageContainer.styled'
import { ProductContainer } from '../../components/ProductContainer.styled'
import Recomended from '../../components/Recomended'
import { Main } from '../../components/styles/Main.styled'
import { StyledInput } from '../../components/styles/Input.styled'

const product = {
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
}

const recomendedProducts = [
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
]

export default function ProductPage() {
  const [quantity, setQuantity] = useState('1')
  const router = useRouter()
  const { productId } = router.query

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('event:', e)
    setQuantity(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // validate()
    console.log(`${productId}: ${quantity}`)
  }

  return (
    <Main>
      <ProductContainer>
        <div>
          <Heading size="2rem">{product.name}</Heading>
          <ImageContainer size="large">
            <Image
              src={product.image_url}
              height={480}
              width={480}
              alt={product.name}
            />
          </ImageContainer>
        </div>
        <div>
          <CardHeading as="h2" color="var(--color-brand-gray)" size="1.5rem">
            {product.name}
          </CardHeading>
          <CardHeading as="h3">Precio: ${product.total_price}</CardHeading>

          <form onSubmit={handleSubmit}>
            <label style={{ fontSize: '1.5rem' }}>
              Qty:
              <StyledInput
                min={1}
                max={100}
                type="number"
                id="quantity"
                name="quantity"
                aria-label="quantity"
                value={quantity}
                onChange={handleOnChange}
              />
            </label>
            <CardButton>agregar al carrito</CardButton>
          </form>
        </div>
      </ProductContainer>
      <Recomended recomendedProducts={recomendedProducts} />
    </Main>
  )
}
