import './TodoList.css';

/*

        $(document).ready(function () {
            $(".save").click(function(){
                var todoText = $("#todoText").val();
                $("<div/>")
                .append($("<input/>", {type:"checkbox", name:"", id: ""}))
                .append($("<span/>", {class:"todoText"}).text(todoText))
                .append($("<button/>", {type:"button", class: "remove"}).text("Remove").click(function(){
                    $(this).parent("div").remove();
                }))
                .append($("<button/>", {type:"button", class: "modify"}).text("Modify").click(function(){
                    var modifyBtn = $(this);
                    var todoText = modifyBtn.siblings("span.todoText");
                    todoText.replaceWith($("<input/>", {class:"todoInputText"}).val(todoText.text()));
                    modifyBtn.siblings("button.remove").hide();
                    modifyBtn.hide();
                    modifyBtn.siblings("button.save").show();
                }))
                .append($("<button/>", {type:"button", class: "save"}).text("Save").click(function(){
                    var saveBtn = $(this);
                    var todoInputText = saveBtn.siblings("input.todoInputText");
                    todoInputText.replaceWith($("<span/>", {class:"todoText"}).text(todoInputText.val()));
                    saveBtn.hide();
                    saveBtn.siblings("button.remove").show();
                    saveBtn.siblings("button.modify").show();
                }).hide())
                .appendTo("#todoList");
            });
        });
*/

function TodoList() {
  return (
    <>
      <section className="main-section">
        <article className="area1" id="test1">
          <p className="title">My Todos</p>
          <div>
            <input type="text" name="" id="todoText" />
            <button type="button" className="save">
              Save
            </button>
          </div>
        </article>
        <article className="area2" id="todoList"></article>
      </section>
    </>
  );
}

export default TodoList;
