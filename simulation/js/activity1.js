let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   <h4 class="center-text fs-28px fb-700">Hypothesis testing: the chi square test</h4>
   <p class="center-text fs-20px fb-600">To check if population and sample variance are equal.</p>
   <br><br>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 1</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML = text;
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
        <br>
        <div class='col'>
        
            <div class='row' id='s1' >
                <div class='col-6'>Choose the number of Observations</div>
                <div class='col-6'>
                    <select class='form-select fs-16px' id='act1-n-inp' onchange='set_n();' >

                    </select>
                    <span class='fs-16px' id='dsp-N'></span>
                </div>
                
            </div>

            <br>

            

            <div class='row'>
            <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-btn-1' onclick='internal_calculations_1();' >Generate X</button>
            </div>

        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
    load_dd1_options();
}
//for loading all options
function load_dd1_options() {
    let dd = (document.getElementById('act1-n-inp'));
    dd.innerHTML = ``;
    let op = new Option('--Select--', '0', true);
    dd.add(op);
    for (let i = 20; i < 31; i++) {
        let op = new Option(i.toString(), i.toString());
        dd.add(op);
    }
}
//for setting number of observations
function set_n() {
    let dd = (document.getElementById('act1-n-inp'));
    let btn = (document.getElementById('act1-btn-1'));
    if (dd.value != '0') {
        N = parseInt(dd.value);
        btn.style.display = 'block';
    }
    else {
        N = 0;
        btn.style.display = 'none';
    }
}
//Internal calculations to generate x and Y vectors
function internal_calculations_1() {
    let dd = (document.getElementById('act1-n-inp'));
    let dsp = (document.getElementById('dsp-N'));
    dd.remove();
    dsp.innerText = `n = ${N}`;
    k = 0;
    k = parseFloat((Math.random() * 21 - 10.5).toFixed(1));
    //generate epsilon values
    epsilon = generate_epsilon_values();
    //generate x vector (ascending)
    generate_random_x();
    mu_0 = 0;
    sigma = 0;
    sigma_sq = 0;
    mu_0 = parseFloat((X_bar + Math.random() * (2 * k) - k).toFixed(3));
    sigma = parseFloat((Math.random() * 14 - 7).toFixed(3));
    sigma_sq = parseFloat((Math.pow(sigma, 2)).toFixed(3));
    console.log('X', X);
    //show Xtable
    show_x();
}
//for generating random x vector
function generate_random_x() {
    let arr = [];
    x0 = [];
    while (arr.length < N) {
        // let rv = 20 + Math.floor(Math.random() * 60);
        let rv = parseFloat((Math.random() * 100).toFixed(3));
        if (arr.indexOf(rv) == -1) {
            arr.push(rv);
        }
    }
    arr = arr.sort((a, b) => a - b);
    x0 = arr;
    sum_x = 0;
    X = [];
    let last_indx = x0.length - 1;
    for (let i = 0; i < x0.length; i++) {
        X.push(parseFloat((x0[i] + x0[last_indx] * epsilon[i]).toFixed(3)));
        sum_x += X[i];
    }
    X = X.sort((a, b) => a - b);
    sum_x = parseFloat(sum_x.toFixed(3));
    X_bar = parseFloat((sum_x / N).toFixed(3));
    console.log('x0', x0);
    console.log('sumX', sum_x);
    console.log('X_bar', X_bar);
}
//for generating epsilon values
function generate_epsilon_values() {
    let arr = [];
    while (arr.length < N) {
        let rv = Math.random() * 1.2 - 0.6;
        arr.push(parseFloat(rv.toFixed(3)));
    }
    //console.log(arr);
    return arr;
}
//to display x vectors
function show_x() {
    let btn = (document.getElementById('act1-btn-1'));
    btn.remove();
    let d = document.getElementById('tb1-box');
    let text = `
        <br>
        <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
                <tr id='x-values'>
                <th class='table-dark'>X</th>
                </tr>
            </table>

        </div>
        <br>
        
         <p class="fs-16px" style="text-align:left;">Calculate,</p>

         <div class="row fs-18px" style="align-items:center;">
            <div id="x-bar-div">
               <div class="row" style="justify-content:center;align-items:center;" >
                  <div class="col-lg-3">
                     $$ \\bar{X} = \\frac {\\Sigma{X}}{n} = $$
                  </div>
                  <div class="col-lg-3" style="text-align:left">
                     <input type='number' id='x-bar-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <button class='btn btn-info std-btn' onclick='verify_x_y_bar();' style='position: relative; left: 0w;' id='vf-bar-btn'>Verify</button>
            </div>
         </div>
         <br>
         

        `;
    d.innerHTML += text;
    load_x_values();
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_x_y_bar() {
    let div = (document.getElementById('x-bar-div'));
    let x_bar_inp = (document.getElementById('x-bar-inp'));
    console.log(X_bar);
    if (!verify_values(parseFloat(x_bar_inp.value), X_bar)) {
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
         $$ \\bar{X} = \\frac {\\Sigma{X}}{n} = ${X_bar} $$
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    act1_internal_calculations_2();
}
function load_x_values() {
    let x_val = (document.getElementById('x-values'));
    for (let i = 0; i < X.length; i++) {
        console.log(X[i]);
        x_val.innerHTML += `<td>${X[i]}</td>`;
    }
}
function act1_internal_calculations_2() {
    let div = (document.getElementById('tb1-box'));
    act1_table_data_1 = [];
    sum_x_x_bar_2 = 0;
    S_2 = 0;
    for (let i = 0; i < X.length; i++) {
        let ar = [];
        let temp1 = parseFloat((X[i] - X_bar).toFixed(3));
        let temp2 = parseFloat((Math.pow(temp1, 2)).toFixed(3));
        sum_x_x_bar_2 += temp2;
        ar.push(X[i]);
        ar.push(temp1);
        ar.push(temp2);
        act1_table_data_1.push(ar);
    }
    sum_x_x_bar_2 = parseFloat(sum_x_x_bar_2.toFixed(3));
    S_2 = parseFloat((sum_x_x_bar_2 / (N - 1)).toFixed(3));
    console.log('act1_table_data_1', act1_table_data_1);
    console.log('sum_x_x_bar_2', sum_x_x_bar_2);
    console.log('S_2', S_2);
    div.innerHTML += `
      <div class='fx-16px' style="text-align:left;">
         <p>
            Calculate the variance of X
         </p>
         <div id="act1-tb-box2" style="text-align: center;"></div>
      </div>
   `;
    let tb_box = (document.getElementById('act1-tb-box2'));
    let header = ['x', '(x-x&#x0305;)', '(x-x&#x0305;)<sup>2</sup>'];
    let tab = new Verify_Rows_Cols(header, act1_table_data_1, [0], [[1, 2]], '', tb_box, true, true, load_s_square);
    tab.load_table();
}
function load_s_square() {
    let div = (document.getElementById('tb1-box'));
    div.innerHTML += `
   <br>
   <div class="fs-16px center-text">
      <div class="row justify-content-center" style="align-items:center;" id="s-2-div">
         <div class="col-lg-4">
            $$ S^2 = \\frac{\\sum{(X- \\bar{X})^2}}{n-1} = $$
         </div>
         <div class="col-lg-4">
            <input type='number' id='s-2-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <div>
         <button class='btn btn-info std-btn' onclick='verify_s_2();' style='position: relative; left: 0w;' id='vf-s-2-btn'>Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-btn-2' onclick='activity1_p1()' >Next</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_s_2() {
    let div = (document.getElementById('s-2-div'));
    let btn = (document.getElementById('vf-s-2-btn'));
    let next_btn = (document.getElementById('act1-btn-2'));
    let s_2_inp = (document.getElementById('s-2-inp'));
    console.log(S_2);
    if (!verify_values(parseFloat(s_2_inp.value), S_2)) {
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
   $$ S^2 = \\frac{\\sum{(X- \\bar{X})^2}}{n-1} = ${S_2} $$
   `;
    setTimeout(() => MathJax.typeset(), 100);
    btn.remove();
    next_btn.style.display = 'block';
}
activity1();
//# sourceMappingURL=activity1.js.map