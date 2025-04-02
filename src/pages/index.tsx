import React from 'react';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '@/interfaces/layout';
import { MainLayout } from '@/components/layout';

// Componentes importados dinamicamente
const DynamicHomeHero = dynamic(() => import('../components/home/hero'));
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'));
// Renomeado para consistência
const DynamicHomeConteudoResumos = dynamic(() => import('../components/home/conteudo-resumos'));

// Adicionada a importação que faltava
const DynamicHomeCronogramaResumos = dynamic(() => import('../components/home/cronograma-resumos'));
const DynamicHomeQuemSomos = dynamic(() => import('../components/home/quem-somos'));
const DynamicHomeCompraFinal = dynamic(() => import('../components/home/compra-final')); // ADICIONAR

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      {/* Usando nome dinâmico consistente */}
      <DynamicHomeConteudoResumos />
      {/* Usando nome dinâmico */}
      <DynamicHomeCronogramaResumos />
      <DynamicHomeFeature />
      <DynamicHomeQuemSomos />
      <DynamicHomeCompraFinal />
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;