import styles from './Loader.module.scss'

export const Loader = () => (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div
      className={`${styles.Loader} ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16`}
    />
  </div>
)
