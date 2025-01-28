function activity2_p4() {
    let btn = (document.getElementById('act2-p3-btn-2'));
    btn && btn.remove();
    chi_sq_alpha_a2 = 0;
    chi_sq_alpha_a2 = chi_sq_table_data[N - 1 - 19][1];
    let btn_txt = get_collapse_btn_text('Conclusion', 'act2-p4-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide center-text" id='act2-p4-div'>
         <h4 class="fs-20px fb-800" style="text-align:left;">Step 3:</h4>
         <p class="fs-18px fb-500" style="text-align:left;">
            Using degree of freedom and significance level, the critical value is <span style="display:inline-block;">$$ \\chi^2_{\\alpha_h,n-1} $$</span>
         </p>
         <div id="act2-chi-2-table-div">
         
         </div>
         <div id='act2-chi-2-alpha-div'>
            <div class='row justify-content-center' style="align-items:center;">
               <div class="col-md-4">
                  $$ \\chi^2_{\\alpha_h,n-1} =$$
               </div>
               <div class="col-md-4">
                  <input type='number' id='act2-chi-2-alpha-inp' class='form-control fs-16px' />
               </div>
            </div>
            <button class='btn btn-info std-btn' onclick='a2_verify_chi_2_alpha();' style='position: relative; left: 0w;' id='act2-vf-chi-2-alpha-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p4-div');
    }, 150);
    act2_load_chi_sq_table();
}
function act2_load_chi_sq_table() {
    let div = (document.getElementById('act2-chi-2-table-div'));
    let chi_tab = new Show_Table_Custom_Fixed(['n-1', '0.05', '0.01'], chi_sq_table_data, div, 3);
    chi_tab.load_table();
}
function a2_verify_chi_2_alpha() {
    let chi_alpha_inp = (document.getElementById('act2-chi-2-alpha-inp'));
    console.log(chi_sq_alpha_a2);
    if (!verify_values(parseFloat(chi_alpha_inp.value), chi_sq_alpha_a2)) {
        chi_alpha_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        chi_alpha_inp.style.border = '1px solid #ced4da';
        chi_alpha_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    act2_load_conclusion();
}
function act2_load_conclusion() {
    let alpha_div = (document.getElementById('act2-chi-2-alpha-div'));
    alpha_div.remove();
    let div = (document.getElementById('act2-p4-div'));
    div.innerHTML += `
      <div class="row justify-content-center" style="align-items:center">
         <div class="col-sm-4">
            $$ \\chi^2_{\\alpha_h,n-1} = ${chi_sq_alpha_a2}$$
         </div>
         <div class="col-sm-4">
            $$ \\chi^2_0 = \\frac{\\left(n-1\\right)S^2}{\\sigma^2} = ${chi_sq_a2}$$
         </div>
      </div>
      <br>
      <div>
         If <span style="display:inline-block;">$$ \\chi^2_0 > \\chi^2_{\\alpha_h,n-1} $$</span> then we reject null hypothesis i.e. population variance and sample variance are not same. Else they may be approximately same.
      </div>
      <div>
         So what can we conclude from the estimated values?
      </div>
      <br>
      <div class="row justify-content-center " style="align-items:center;">
            <div class="col-lg-6" >
               <button id="act2-null-hypo-btn1" onclick="a2_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>
                  Population variance and Sample variance are same
               </button>
            </div>
            <div class="col-lg-6">
               <button id="act2-null-hypo-btn2" onclick="a2_vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center; margin-top:5px;'>
                  Population variance and Sample variance are not same
               </button>
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p4-btn-1' onclick='activity3()' >Activity 3</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 50);
    a2_find_null_hypothesis();
}
function a2_find_null_hypothesis() {
    if (chi_sq_a2 > chi_sq_alpha_a2) {
        hypo_test_reject_op_a2 = 2;
    }
    else {
        hypo_test_reject_op_a2 = 1;
    }
}
function a2_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`act2-null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act2-p4-btn-1'));
    if (hypo_test_reject_op_a2 == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (hypo_test_reject_op_a2 == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == hypo_test_reject_op_a2) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', a2_vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`act2-null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity2_p4();
//# sourceMappingURL=activity2_p4.js.map