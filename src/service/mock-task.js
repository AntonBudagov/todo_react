export default class Task {
  // getAllTask = () => {
  //   return [
  //     {label: 'Drink Coffee', done: false, important: false, id: 23},
  //     {label: 'Make Awesome App', done: false, important: true, id: 43},
  //     {label: 'Have a lunch', done: true, important: false, id: 34}
  //   ]
  // }


  _apiBase = 'http://localhost:3001/tasks/';

  async read (id = '') {
    const response = await fetch(`${this._apiBase}/${id}`);
    if(!response.ok) {
      throw new Error(`Could not fetch ${id}, received ${response.status}`)
    }
    const body = await response.json();
    return body;
  };

  async getAllTask() {
    const response = await this.read();
    return response
  }

  async add(data) {
    return await fetch(this._apiBase, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
  }
}