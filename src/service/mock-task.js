export default class Task {
  _apiBase = 'http://localhost:4201/tasks';

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

  async add(data) {
    return await fetch(this._apiBase, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
  }


  async delete(id) {
    console.log(id);
    return await fetch(`${this._apiBase}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  }
}