function activity3_p3() {
    let btn = (document.getElementById('act3-p2-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('z-table', 'act3-z-table-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collpase divide" id="act3-z-table-div">
   <div>
   If |z<sub>0</sub>| is in range of z<sub>&alpha;<sub>h</sub>/2</sub> then accept the null hypothesis. Else reject the null hypothesis.
</div>
      <div class="row justify-content-center fs-20px" style="align-items:center;">
         <div class="col-lg-3">
            $$ z_{\\alpha_h/2} = \\pm1.645 $$
         </div>
         <div class="col-lg-3">
            $$ z_0 = \\sqrt{2\\chi_0^2} - \\sqrt{2n-1} = ${z_0_a3} $$
         </div>
      </div>
      <div class="fs-16px">
         What do you conclude from this?
      </div>
      <br>
      <div class="row justify-content-center " style="align-items:center;">
         <div class="col-lg-5" >
            <button id="act3-null-hypo-btn1" onclick="a3_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>

               Reject the null hypothesis

            </button>
         </div>

         <div class="col-lg-5">
            <button id="act3-null-hypo-btn2" onclick="a3_vf_null_hypo('2')" style='margin-top:5px; border: 1px solid gray; width: 100%; text-align: center;'>
         
               Accept the null hypothesis
         
            </button>
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act3-p3-btn-2' onclick='activity4()' >Next</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-z-table-div');
    }, 150);
    a3_find_null_hypothesis();
}
function a3_find_null_hypothesis() {
    if (Math.abs(z_0_a3) > -1.645 && Math.abs(z_0_a3) < 1.645) {
        hypo_test_reject_op_a3 = 2;
    }
    else {
        hypo_test_reject_op_a3 = 1;
    }
}
function a3_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`act3-null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act3-p3-btn-2'));
    if (hypo_test_reject_op_a3 == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (hypo_test_reject_op_a3 == 2) {
        msg = 'We accept null hypothesis';
    }
    if (parseInt(id) == hypo_test_reject_op_a3) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', a3_vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`act3-null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity1_p2();
//# sourceMappingURL=activity3_p3.js.map