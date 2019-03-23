import { Injectable } from '@angular/core';

import { Post } from 'src/models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = '/app/posts'
  
  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get<Array<Post>>(this.url)
  }

  public getById(id: string) {
    return this.http.get<Post>(`${this.url}/${id}`)
  }

  public save(post: Post) {
    return post.id ? this.update(post) : this.add(post)
  }

  private add(post: Post) {
    const randomId = Math.random().toString(36).substring(7)
    post.id = randomId

    return this.http.post<Post>(this.url, post)
  }

  private update(post: Post) {
    return this.http.put<Post>(`${this.url}/${post.id}`, post)
  }

  public delete(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
