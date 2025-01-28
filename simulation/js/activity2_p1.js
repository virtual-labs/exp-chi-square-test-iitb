function activity2_p1() {
    let btn = (document.getElementById('act2-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Variance of X', 'act2-p1-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collpase divide center-text " id="act2-p1-div">
         <h4 class="fs-20px fb-800" style="text-align:left;"> 
            Step 1:
         </h4>
         <div>
            $$ \\bar{X'} = \\frac{\∑ X'_i}{n} = ${X_dash_bar} $$
         </div>
         <p style="text-align:left;">
            Calculate the variance of X'
         </p>
         <div id="act2-variance-div">
         
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    let tb_box = (document.getElementById('act2-variance-div'));
    let tab = new Verify_Rows_Cols(["X'", "X'-X&#x0305;'", "(X'-X&#x0305;')<sup>2</sup>"], act2_table_data_1, [0], [[1, 2]], '', tb_box, true, true, a2_load_s_sq);
    tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p1-div');
    }, 150);
}
function a2_load_s_sq() {
    S_2_a2 = 0;
    S_2_a2 = parseFloat((sum_x_x_bar_2_a2 / (N - 1)).toFixed(3));
    let div = (document.getElementById('act2-p1-div'));
    div.innerHTML += `
      <br>
      <div id="act2-s-sq-div">
         <div class="row justify-content-center center-text" style="align-items:center;">
            <div class="col-sm-4">
               $$ S^2 = \\frac{\\sum\\left(X' - \\bar{X'}\\right)^2}{n-1} =  $$
            </div>
            <div class="col-sm-4">
               <input type='number' id='act2-s-2-inp' class='form-control fs-16px' />
            </div>
         </div>
         <button class='btn btn-info std-btn' onclick='a2_verify_s_2();' style='position: relative; left: 0w;' id='act2-vf-s-2-btn'>Verify</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a2_verify_s_2() {
    let s2_inp = (document.getElementById('act2-s-2-inp'));
    console.log(S_2_a2);
    if (!verify_values(parseFloat(s2_inp.value), S_2_a2)) {
        s2_inp.style.border = '1px solid red';
        alert('Incorrect S square value');
        return;
    }
    else {
        s2_inp.style.border = '1px solid #ced4da';
        s2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-s-sq-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ S^2 = \\frac{\\sum\\left(X' - \\bar{X'}\\right)^2}{n-1} = ${sum_x_x_bar_2_a2} $$
      </div>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p1-btn-1' onclick='activity2_p2()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity2_p1();
//# sourceMappingURL=activity2_p1.js.map