export default function objectSample() {
  // const a: object = {
  //   name: 'what_a_pon',
  //   age: 21
  // }

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const watapon: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 21,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }

  watapon.gender = 'male'
  watapon.lastName = 'Kamado'
  // watapon.firstName = 'Tanjiro'

  console.log('Object object sample 3:', watapon)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}
