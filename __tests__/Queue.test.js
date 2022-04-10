const Queue = require("../Queue");

describe("Queue", () => {
  it("should enqueue element", () => {
    const queue = new Queue(1);
    queue.enqueue(1);
    expect(queue.values).toEqual([1]);
  });

  it("should enqueue element and expand array if elements do not fit", () => {
    const queue = new Queue(1);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.values).toEqual([1, 2, 3, null]);
  });

  it("should enqueue element and expand array if elements do not fit", () => {
    const queue = new Queue(1);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.values).toEqual([2, 3, null]);
  });

  it("should return first element", () => {
    const queue = new Queue(1);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peekFirst()).toEqual(1);
  });

  it("should return last element", () => {
    const queue = new Queue(1);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peekLast()).toEqual(3);
  });
});
