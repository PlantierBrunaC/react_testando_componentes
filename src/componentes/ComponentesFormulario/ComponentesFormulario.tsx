import styles from './ComponentesFormulario.module.css'
import React, { forwardRef } from 'react'
import { FaUserPlus } from "react-icons/fa"


type TipoCampo = 'input' | 'select' | 'button'

interface CampoFormularioProps {
  tipo: TipoCampo
  options?: string[] // apenas para select
  children?: React.ReactNode // apenas para button
  className?: string
  disabled?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<any>) => void
  onClick?: () => void
  placeholder?: string
  icone?: JSX.Element

}

// ⬇️ Agora o `ref` é o segundo argumento, e NÃO está dentro de props
const CampoFormulario = forwardRef<HTMLInputElement, CampoFormularioProps>(
  ({ tipo, options = [], children, className,icone, ...rest }, ref) => {
    if (tipo === 'select') {
      return (
        <select className={styles.campo} {...rest}>
          <option value="">Selecione seu nome</option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )
    }

    if (tipo === 'button') {
      return (
        <button
          type="submit"
          className={`${styles.botao} ${rest.disabled ? styles.disabled : styles.enabled}`}
          {...rest}
        >
          {children}
        </button>
      )
    }

    // input com forwardRef aplicado corretamente
    return (
      <div className={styles.inputWrapper}>
        {icone && <span className={styles.icone}>{icone}</span>}
        <input ref={ref} className={styles.campo} {...rest} />
      </div>
    )
  }
)

// Adiciona nome ao componente para facilitar debug
CampoFormulario.displayName = "CampoFormulario"

export default CampoFormulario
