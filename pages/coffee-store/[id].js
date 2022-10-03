import { useRouter } from 'next/router';
import Link from 'next/link';

import coffeeStoresData from '../../components/data/coffee-stores.json';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id === 0;
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
  };
}

const CoffeeStore = () => {
  const router = useRouter();
  console.log('router', router);
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href='/'>Back to Home</Link>
    </div>
  );
};

export default CoffeeStore;
