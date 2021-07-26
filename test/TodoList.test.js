const { assert } = require("chai");

const TodoList = artifacts.require("./TodoList.sol");

contract("TodoList", (accounts) => {
  before(async () => {
    this.TodoList = await TodoList.deployed();
  });

  it("deployed succesfully", async () => {
    const address = await this.TodoList.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    console.log(address);
  });

  //   it("lists of tasks", async () => {
  //     const taskCount = await this.TodoList.taskCount();
  //     const task = await this.TodoList.tasks(taskCount);
  //     assert.equal(task.id.toNumber(), taskCount.toNumber());
  //     assert.equal(task.content, "contact Laywer");
  //     assert.equal(task.completed, false);
  //     assert.equal(taskCount.toNumber(), 1);
  //   });

  //   it("creats tasks", async () => {
  //     const result = await this.TodoList.createTask(
  //       "do something with your life!"
  //     );
  //     const taskCount = await this.TodoList.taskCount();
  //     assert.equal(taskCount, 2);
  //     const event = result.logs[0].args;
  //     // console.log(result);
  //     // console.log(event);
  //     assert.equal(event.id.toNumber(), 2);
  //     assert.equal(event.content, "do something with your life!");
  //     assert.equal(event.completed, false);
  //   });
});
