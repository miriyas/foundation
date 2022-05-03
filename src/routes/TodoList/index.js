import styles from './TodoList.module.scss'
import { CheckIcon } from '../../assets/svgs'

function TodoList() {
  const handleAddClick = () => {
    // console.log('handleAddClick')
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <ul className={styles.tasks}>
          <p className={styles.tasksTitle}>Today&apos;s</p>
          <li className={styles.task}>
            <div className={styles.checkboxWrapper}>
              <input type='checkbox' />
              <CheckIcon />
            </div>
            <p className={styles.title}>계란 2판 사기</p>
          </li>
          <li className={styles.task}>
            <div className={styles.checkboxWrapper}>
              <input type='checkbox' />
              <CheckIcon />
            </div>
            <p className={styles.title}>계란 24판 사기</p>
          </li>
        </ul>
        <button type='button' className={styles.addButton} onClick={handleAddClick} aria-label='Add button' />
      </div>
    </div>
  )
}

export default TodoList
