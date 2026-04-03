const todoController = require("../../controllers/todo_controllers");
const ToDo = require("../../models/todoModel");

jest.mock("../../models/todoModel", () => ({
    find: jest.fn()
}));

const mockFind = ToDo.find;

describe("When Todo Controller is invoked", () => {

    let req, res;

    beforeEach(() => {
        req = {};

        res = {
            status: jest.fn().mockReturnThis(), 
            json: jest.fn()
        };
    });

    describe("For getTodos function", () => {
        it("should return me all the todos", async () => {

            const mockTodos = [
                {_id: 0, title: "Todo 1", completed: false},
                {_id: 1, title: "Todo 2", completed: false},
                {_id: 2, title: "Todo 3", completed: false}
            ];

            mockFind.mockResolvedValue(mockTodos);

            await todoController.getTodos(req, res);

            expect(mockFind).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockTodos);
        });
    });
});