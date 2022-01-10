import React from 'react';
import "./empty.scss"

const Empty = () => {
  return (
    <div className='empty'>
      <span className='empty__title'>Нет результатов</span>
        <div className="empty__wp">
          <span className="empty__name">
            Пусто
          </span>
          <span className="empty__filter">Попробуйте изменить запрос</span>
        </div>
    </div>
  )
}

export default Empty