import styles from "./styles.module.css"

import lupaIcon from '../../assets/lupa-icon.svg'
import menuIcon from '../../assets/menu-icon.svg'
import logoCorebiz from '../../assets/site-logo-corebiz-preto-cinza.svg'
import cartIcon from '../../assets/shopping-cart-icon.svg'
import logoConta from '../../assets/user-icon.svg'

import { useContext } from "react"
import { CartContext } from "../../contexts/cart"

export const Header = () => {
  //CONTEXTO DA QUANTIDADE DE ITENS NO CARRINHO
  const { quant, setQuant } = useContext(CartContext)

  //COMPONENTE
  return (
    <header className={styles.headerInner}>
      {/* IMAGEM HAMBURGER MENU */}
      <img className={styles.menuIcon} src={menuIcon} alt="Menu do site" />

      {/* LOGO COREBIZ */}
      <img className={styles.logoCorebiz} src={logoCorebiz} alt="Logo Corebiz" />

      {/* CAMPO DO USUARIO E ICON */}
      <div className={styles.divUser}>
        <img className={styles.logoConta} src={logoConta} alt="Logo Conta" />
        <p className={styles.pConta}>Minha Conta</p>
      </div>

      {/* CARRINHO E QUANTIDADE ITENS */}
      <div className={styles.divCart}>
        <img className={styles.cartIcon} src={cartIcon} alt="Carrinho de compras"
          //CLICK NO CARRINHO ZERA ELE E O LOCAL STORAGE
          onClick={() => {
            setQuant(0)
            localStorage.clear()
          }}
        />
        {quant > 0 ? <p className={styles.pCart}>{quant}</p> : ""}
      </div>

      {/* INPUT DO QUE ESTÁ PROCURANDO */}
      <form className={styles.formHeader}>
        <input type="text" placeholder="O que está procurando?" className={styles.inputForm} />
        <img className={styles.lupaIcon} src={lupaIcon} alt="Lupa de pesquisa" />
      </form>
    </header>
  )

}
