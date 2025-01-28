function activity1_p1() {
    let btn = (document.getElementById('act1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate &chi;<sup>2</sup>', 'act1-p1-div');
    chi_sq = 0;
    chi_sq = parseFloat((((N - 1) * S_2) / sigma_sq).toFixed(3));
    maindiv.innerHTML += `
      ${btn_txt}
      <div class='collpase divide center-text' id=act1-p1-div>
         <h4 class="fs-20px fb-800" style="text-align:left;"> 
            Step 2:
         </h4>
         <div class="row justify-content-center fs-18px fb-500">
            <div class="col-sm-4">
               &sigma;<sup>2</sup> = ${sigma_sq}
            </div>
            <div class="col-sm-4">
               S<sup>2</sup> = ${S_2}
            </div>
         </div>
         <br>
         <div class="fs-18px">
            <p style="text-align:left;">
               Calculate <span style="display:inline-block;">$$\\chi_0^2 $$</span> value by following formula.
            </p>
            <div id="chi-2-div">
               <div class="row justify-content-center" style="align-items:center;">
                  <div class="col-md-4">
                     $$ \\chi^2_0 = \\frac{\\left(n-1 \\right)S^2}{\\sigma^2} =  $$
                  </div>
                  <div class="col-md-4">
                     <input type='number' id='chi-2-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <button class='btn btn-info std-btn' onclick='verify_chi_2();' style='position: relative; left: 0w;' id='vf-chi-2-btn'>Verify</button>
            </div>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p1-div');
    }, 150);
}
function verify_chi_2() {
    let chi_inp = (document.getElementById('chi-2-inp'));
    console.log(chi_sq);
    if (!verify_values(parseFloat(chi_inp.value), chi_sq)) {
        chi_inp.style.border = '1px solid red';
        alert('Incorrect chi square value');
        return;
    }
    else {
        chi_inp.style.border = '1px solid #ced4da';
        chi_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('chi-2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ \\chi^2_0 = \\frac{\\left(n-1 \\right) S^2}{\\sigma^2} = ${chi_sq} $$
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p1-btn-1' onclick='activity1_p2()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity1_p1();
//# sourceMappingURL=activity1_p1.js.map