import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Bem-vindo ao ${siteConfig.title}`}
      description="Documentação técnica do sistema de gestão escolar">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Acessar Documentação 📚
          </Link>
        </div>

        <section className={styles.section}>
          <h2>Sobre o Projeto</h2>
          <p>
            Este é um sistema web de <strong>gestão escolar</strong>, projetado para facilitar o controle e organização de dados acadêmicos, como informações de professores, disciplinas, cursos, turmas e ambientes físicos. O objetivo é oferecer uma plataforma eficiente para o gerenciamento das informações da escola.
          </p>
          <p>
            O projeto está dividido em duas camadas principais: <strong>Back-end</strong> e <strong>Front-end</strong>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Estrutura do Projeto</h2>
          <ul>
            <li><Link to="/docs/category/back-end">Back-end</Link>: A lógica e armazenamento de dados.</li>
            <li><Link to="/docs/category/front-end">Front-end</Link>: A interface interativa para o usuário.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Comece Agora</h2>
          <p>
            Para começar, explore as seções de <strong>Back-end</strong> e <strong>Front-end</strong> para entender a implementação do sistema. Se preferir, pode clonar o repositório e testar o projeto localmente.
          </p>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Acesse a documentação para mais detalhes
          </Link>
        </section>
      </main>
    </Layout>
  );
}