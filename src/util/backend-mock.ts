import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Post } from 'src/models/post';

export class BackEndMock implements InMemoryDbService {
  createDb() {
    let posts: Array<Post> = []

    return { posts }
  }
}
