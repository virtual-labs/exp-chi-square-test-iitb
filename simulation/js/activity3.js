function activity3() {
    let btn = (document.getElementById('act2-p4-btn-1'));
    btn && btn.remove();
    maindiv.innerHTML += `
      <div class="divide center-text" id="act3-div1">
         <h4 class="fb-700 fs-28px">Activity 3</h4>
         <br>

         <div class='col'>
            <div class='row' id='act3-s1' >
               <div class='col-6'>Choose the number of Observations</div>
               <div class='col-6'>
                  <select class='form-select fs-16px' id='act3-n-inp' onchange='a3_set_n();' >

                  </select>
                  <span class='fs-16px' id='act3-dsp-N'></span>
               </div>
            </div>

            <br>

            <div class='row'>
               <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act3-btn-1' onclick='a3_internal_calculations_1();' >Generate X</button>
            </div>
         </div>
      </div>
   `;
    hide_all_steps();
    a3_load_dd1_options();
}
//for loading all options
function a3_load_dd1_options() {
    let dd = (document.getElementById('act3-n-inp'));
    dd.innerHTML = ``;
    let op = new Option('--Select--', '0', true);
    dd.add(op);
    for (let i = 20; i < 31; i++) {
        let op = new Option(i.toString(), i.toString());
        dd.add(op);
    }
}
//for setting number of observations
function a3_set_n() {
    let dd = (document.getElementById('act3-n-inp'));
    let btn = (document.getElementById('act3-btn-1'));
    if (dd.value != '0') {
        N_a3 = parseInt(dd.value);
        btn.style.display = 'block';
    }
    else {
        N_a3 = 0;
        btn.style.display = 'none';
    }
}
//Internal calculations to generate x and Y vectors
function a3_internal_calculations_1() {
    let dd = (document.getElementById('act3-n-inp'));
    let dsp = (document.getElementById('act3-dsp-N'));
    dd.remove();
    dsp.innerText = `n = ${N_a3}`;
    k_a3 = 0;
    k_a3 = parseFloat((Math.random() * 21 - 10.5).toFixed(1));
    //generate epsilon values
    epsilon_a3 = a3_generate_epsilon_values();
    //generate x vector (ascending)
    a3_generate_random_x();
    mu_0_a3 = 0;
    sigma_a3 = 0;
    sigma_sq_a3 = 0;
    mu_0_a3 = parseFloat((X_bar_a3 + Math.random() * (2 * k_a3) - k_a3).toFixed(3));
    sigma_a3 = parseFloat((Math.random() * 14 - 7).toFixed(3));
    sigma_sq_a3 = parseFloat((Math.pow(sigma_a3, 2)).toFixed(3));
    console.log('X', X_a3);
    //show Xtable
    a3_show_x();
}
//for generating random x vector
function a3_generate_random_x() {
    let arr = [];
    x0_a3 = [];
    while (arr.length < N_a3) {
        // let rv = 20 + Math.floor(Math.random() * 60);
        let rv = parseFloat((Math.random() * 100).toFixed(3));
        if (arr.indexOf(rv) == -1) {
            arr.push(rv);
        }
    }
    arr = arr.sort((a, b) => a - b);
    x0_a3 = arr;
    sum_x_a3 = 0;
    X_a3 = [];
    let last_indx = x0_a3.length - 1;
    for (let i = 0; i < x0_a3.length; i++) {
        X_a3.push(parseFloat((x0_a3[i] + x0_a3[i] * epsilon_a3[i]).toFixed(3)));
        sum_x_a3 += X_a3[i];
    }
    X_a3 = X_a3.sort((a, b) => a - b);
    sum_x_a3 = parseFloat(sum_x_a3.toFixed(3));
    X_bar_a3 = parseFloat((sum_x_a3 / N_a3).toFixed(3));
    console.log('x0', x0_a3);
    console.log('sumX', sum_x_a3);
    console.log('X_bar_a3', X_bar_a3);
}
//for generating epsilon values
function a3_generate_epsilon_values() {
    let arr = [];
    while (arr.length < N_a3) {
        let rv = Math.random() * 1.2 - 0.6;
        arr.push(parseFloat(rv.toFixed(3)));
    }
    //console.log(arr);
    return arr;
}
//to display x vectors
function a3_show_x() {
    let btn = (document.getElementById('act3-btn-1'));
    btn.remove();
    let btn_txt = get_collapse_btn_text('Generate Dataset', 'act3-div2');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide center-text" id="act3-div2">
         <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
         <br>
         <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
               <tr id='act3-x-values'>
                  <th class='table-dark'>X</th>
               </tr>
            </table>
         </div>
         <br>
         <p class="fs-16px" style="text-align:left;">Calculate,</p>

         <div class="row fs-18px" style="align-items:center;">
            <div id="act3-x-bar-div">
               <div class="row" style="justify-content:center;align-items:center;" >
                  <div class="col-lg-3">
                     $$ \\bar{X} = \\frac {\\Sigma{X}}{n} = $$
                  </div>
                  <div class="col-lg-3" style="text-align:left">
                     <input type='number' id='act3-x-bar-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <button class='btn btn-info std-btn' onclick='a3_verify_x_bar();' style='position: relative; left: 0w;' id='act3-vf-bar-btn'>Verify</button>
            </div>
         </div>
      </div>
   `;
    a3_load_x_values();
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-div2');
    }, 150);
}
function a3_load_x_values() {
    let x_val = (document.getElementById('act3-x-values'));
    for (let i = 0; i < X_a3.length; i++) {
        console.log(X_a3[i]);
        x_val.innerHTML += `<td>${X_a3[i]}</td>`;
    }
}
function a3_verify_x_bar() {
    let div = (document.getElementById('act3-x-bar-div'));
    let x_bar_inp = (document.getElementById('act3-x-bar-inp'));
    console.log(X_bar_a3);
    if (!verify_values(parseFloat(x_bar_inp.value), X_bar_a3)) {
        x_bar_inp.style.border = '1px solid red';
        alert('Incorrect xbar value');
        return;
    }
    else {
        x_bar_inp.style.border = '1px solid #ced4da';
        x_bar_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   <div class="row" style="justify-content:center;align-items:center;" >
      <div class="col-lg-3">
         $$ \\bar{X} = \\frac {\\Sigma{X}}{n} = ${X_bar_a3} $$
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    act3_internal_calculations_2();
}
function act3_internal_calculations_2() {
    let div = (document.getElementById('act3-div2'));
    act3_table_data_1 = [];
    sum_x_x_bar_2_a3 = 0;
    S_2_a3 = 0;
    for (let i = 0; i < X_a3.length; i++) {
        let ar = [];
        let temp1 = parseFloat((X_a3[i] - X_bar_a3).toFixed(3));
        let temp2 = parseFloat((Math.pow(temp1, 2)).toFixed(3));
        sum_x_x_bar_2_a3 += temp2;
        ar.push(X_a3[i]);
        ar.push(temp1);
        ar.push(temp2);
        act3_table_data_1.push(ar);
    }
    sum_x_x_bar_2_a3 = parseFloat(sum_x_x_bar_2_a3.toFixed(3));
    S_2_a3 = parseFloat((sum_x_x_bar_2_a3 / (N_a3 - 1)).toFixed(3));
    console.log('act3_table_data_1', act3_table_data_1);
    console.log('sum_x_x_bar_2_a3', sum_x_x_bar_2_a3);
    console.log('S_2_a3', S_2_a3);
    div.innerHTML += `
      <div class='fx-16px' style="text-align:left;">
         <p>
            Calculate the variance of X
         </p>
         <div id="act3-tb-box2" style="text-align: center;"></div>
      </div>
   `;
    let tb_box = (document.getElementById('act3-tb-box2'));
    let header = ['x', '(x-x&#x0305;)', '(x-x&#x0305;)<sup>2</sup>'];
    let tab = new Verify_Rows_Cols(header, act3_table_data_1, [0], [[1, 2]], '', tb_box, true, true, a3_load_s_square);
    tab.load_table();
}
function a3_load_s_square() {
    let div = (document.getElementById('act3-div2'));
    div.innerHTML += `
   <br>
   <div class="fs-16px center-text">
      <div class="row justify-content-center" style="align-items:center;" id="act3-s-2-div">
         <div class="col-lg-4">
            $$ S^2 = \\frac{\\sum{(X- \\bar{X})^2}}{n-1} = $$
         </div>
         <div class="col-lg-4">
            <input type='number' id='act3-s-2-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <div>
         <button class='btn btn-info std-btn' onclick='a3_verify_s_2();' style='position: relative; left: 0w;' id='act3-vf-s-2-btn'>Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act3-btn-2' onclick='activity3_p1()' >Next</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function a3_verify_s_2() {
    let div = (document.getElementById('act3-s-2-div'));
    let btn = (document.getElementById('act3-vf-s-2-btn'));
    let next_btn = (document.getElementById('act3-btn-2'));
    let s_2_inp = (document.getElementById('act3-s-2-inp'));
    console.log(S_2_a3);
    if (!verify_values(parseFloat(s_2_inp.value), S_2_a3)) {
        s_2_inp.style.border = '1px solid red';
        alert('Incorrect S square value');
        return;
    }
    else {
        s_2_inp.style.border = '1px solid #ced4da';
        s_2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   $$ S^2 = \\frac{\\sum{(X- \\bar{X})^2}}{n-1} = ${S_2_a3} $$
   `;
    setTimeout(() => MathJax.typeset(), 100);
    btn.remove();
    next_btn.style.display = 'block';
}
// activity3();
//# sourceMappingURL=activity3.js.map