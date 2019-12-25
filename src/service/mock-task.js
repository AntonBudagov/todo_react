import axios from 'axios'
export default class Task {
  _apiBase = 'http://localhost:3000/tasks';

  async read (id = '') {
    const response = await fetch(`${this._apiBase}/${id}`);
    if(!response.ok) {
      throw new Error(`Could not fetch ${id}, received ${response.status}`)
    }
    return await response.json();
  };

  async list() {
    return await this.read();
  }

  // async add(data) {
  //   return await fetch(this._apiBase, {
  //     method: 'POST',
  //     headers: {
  //       Accept: '*/*',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.parse(data),
  //   }).then(res => res.json())
  // }

  // async add(data) {
  //   return await axios.post(this._apiBase,data)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  async delete(id) {
    return await fetch(`${this._apiBase}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  }
}