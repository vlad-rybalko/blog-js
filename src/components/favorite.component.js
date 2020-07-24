import { Component } from '../core/component'

export class FavoriteComponent extends Component {
  constructor(id) {
    super(id)
  }

  onShow() {
    const favorites = JSON.parse(lockalStorage.getItem('favorites'))
    renderList(favorites)
  }
}


function renderList(list = []) {
  if (list.length) {
    

  }

  return `<p>Вы пока ничего не добавили</p>`
}