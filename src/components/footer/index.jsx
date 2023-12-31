import styles from "./styles.module.css"

import logoCorebizBranco from '../../assets/logo-corebiz-branco.svg'
import vtexIcon from '../../assets/vtex-icon.svg'
import mailIcon from '../../assets/mail-icon.svg'
import foneIcon from '../../assets/fone-icon.svg'

import { ButtonWhite } from "../button-white"

export const Footer = () => {

  //COMPONENTE
  return (
    <footer>
      {/* SECTION QUE CONTEM TODOS OS ITENS INTERNOS */}
      <section className={styles.sectionFooter}>
        {/* DIV QUE CONTEM O LOCAL E OS BOTOES BRANCOS */}
        <div className={styles.divLocalEButtons}>
          {/* HEADER LOCALIZAÇÃO */}
          <article className={styles.divLocalHr} title="Informações da localização da empresa">
            <strong className={styles.strongLocal}>Localização</strong>

            <hr className={styles.lineWhite} />

            {/* TEXTO DE ENDEREÇO */}
            <address className={styles.divAdress}>
              <p className={styles.pAdress}>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
              <p className={styles.pAdress}>Alphavile SP</p>
              <p className={styles.pAdress}>brasil@corebiz.ag</p>
              <p className={styles.pAdress}>+55 11 3090 1039</p>
            </address>
          </article>

          {/* //BOTOES BRANCOS */}
          <article className={styles.divButtonsWhite} title="Botões de entrar em contato e o de falar com o consultor">
            <ButtonWhite className={styles.buttonWhite} icon={mailIcon} text="ENTRE EM CONTATO" textAlternative="Icone de email, botão para entrar em contato com a empresa."/>
            <ButtonWhite icon={foneIcon} text="FALE COM O NOSSO CONSULTOR ONLINE" textAlternative="Icone de fone, botão para falar com o consultor." />
          </article>
        </div>

        {/* LOGOS FOOTER */}
        <article className={styles.divImgsCoreVtex} title="Logos das empresas">
          <figure className={styles.logoCorebiz}>
            <figcaption className={styles.pCreated}>Created by</figcaption>
            <img className={styles.imgCorebiz} src={logoCorebizBranco} alt="Logo da empresa Corebiz" />
          </figure>

          <img src={vtexIcon} alt="Logo da empresa Vtex" />
        </article>
      </section>
    </footer>
  )
}
