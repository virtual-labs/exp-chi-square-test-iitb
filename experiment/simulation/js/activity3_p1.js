function activity3_p1() {
    let btn = (document.getElementById('act3-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate &chi;<sup>2</sup>', 'act3-p1-div');
    chi_sq_a3 = 0;
    z_0_a3 = 0;
    chi_sq_a3 = parseFloat((((N_a3 - 1) * S_2_a3) / sigma_sq_a3).toFixed(3));
    z_0_a3 = parseFloat((Math.sqrt(2 * chi_sq_a3) - Math.sqrt(2 * N_a3 - 1)).toFixed(3));
    maindiv.innerHTML += `
      ${btn_txt}
      <div class='collpase divide center-text' id=act3-p1-div>
         <h4 class="fs-20px fb-800" style="text-align:left;"> 
            Step 2:
         </h4>
         <div class="row justify-content-center fs-18px fb-500">
            <div class="col-sm-4">
               &sigma;<sup>2</sup> = ${sigma_sq_a3}
            </div>
            <div class="col-sm-4">
               S<sup>2</sup> = ${S_2_a3}
            </div>
         </div>
         <br>
         <div class="fs-18px">
            <p style="text-align:left;">
               Calculate <span style="display:inline-block;">$$\\chi_0^2 $$</span> value by following formula.
            </p>
            <div id="act3-chi-2-div">
               <div class="row justify-content-center" style="align-items:center;">
                  <div class="col-md-4">
                     $$ \\chi^2_0 = \\frac{\\left(n-1 \\right)S^2}{\\sigma^2} =  $$
                  </div>
                  <div class="col-md-4">
                     <input type='number' id='act3-chi-2-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <button class='btn btn-info std-btn' onclick='a3_verify_chi_2();' style='position: relative; left: 0w;' id='act3-vf-chi-2-btn'>Verify</button>
            </div>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-p1-div');
    }, 150);
}
function a3_verify_chi_2() {
    let chi_inp = (document.getElementById('act3-chi-2-inp'));
    console.log(chi_sq_a3);
    if (!verify_values(parseFloat(chi_inp.value), chi_sq_a3)) {
        chi_inp.style.border = '1px solid red';
        alert('Incorrect chi square value');
        return;
    }
    else {
        chi_inp.style.border = '1px solid #ced4da';
        chi_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-chi-2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ \\chi^2_0 = \\frac{\\left(n-1 \\right) S^2}{\\sigma^2} = ${chi_sq_a3} $$
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act3-p1-btn-1' onclick='a3_load_z_0()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a3_load_z_0() {
    let btn = (document.getElementById('act3-p1-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act3-p1-div'));
    div.innerHTML += `
      <br>
      <div class="fs-18px">
         <p style="text-align:left;">
            Now, we have n > 30, we have alternative method name Fisher's Normal Approximation z-test on <span style="display:inline-block;">$$ \\chi_0^2$$</span> . We will find the <span style="display:inline-block;"> $$ z_0, z_{\\alpha_h,n-1} $$ </span>.
         </p>
         <div id="act3-z-div">
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-md-4">
                  $$ z_0 = \\sqrt{2\\chi_0^2} - \\sqrt{2n-1} = $$
               </div>
               <div class="col-md-4">
                  <input type='number' id='act3-z-inp' class='form-control fs-16px' />
               </div>
            </div>
            <button class='btn btn-info std-btn' onclick='a3_verify_z();' style='position: relative; left: 0w;' id='act2-vf-chi-2-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a3_verify_z() {
    let z_inp = (document.getElementById('act3-z-inp'));
    console.log(z_0_a3);
    if (!verify_values(parseFloat(z_inp.value), z_0_a3)) {
        z_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        z_inp.style.border = '1px solid #ced4da';
        z_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-z-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ z_0 = \\sqrt{2\\chi_0^2} - \\sqrt{2n-1} = ${z_0_a3} $$
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act3-p1-btn-2' onclick='activity3_p2()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity3_p1();
//# sourceMappingURL=activity3_p1.js.map