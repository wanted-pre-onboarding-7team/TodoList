import Category from '.'
import { CategoryType } from '../../atom/CategoryList'
import styles from './CategoryWrap.module.scss'

function CategoryWrap() {
  return (
    <div className={styles.categories}>
      {CategoryType.map((item) => (
        <Category categoryType={item.title} categoryColor={item.color} key={item.id} />
      ))}
    </div>
  )
}

export default CategoryWrap
