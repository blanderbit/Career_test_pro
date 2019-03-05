import {QuestionStore} from "../../store/localStorage";
import config from "../../config";


let step_array = {};
step_array.skills                  = {};
step_array.work_values             = {};
step_array.activities              = {};
step_array.personal_behavior       = {};
step_array.occupations_professions = {};
step_array.total = {};

const count_step = 11;
const count_in_one_step = 3;

export default  {
    count_process(method){
        let process = 0;
        const callback_foreach = function(step){
            if(step[method] || step[method] != null) process++
        };
        this.cicle(callback_foreach, count_step, 3);
        return process / 3;
    },
    count_result(){

        //добавляем в step_array -> метод -> и 6 методов(букв) массивов

        Object.keys(step_array).forEach(item => {
            let step_method = step_array[item];
            config.letters.forEach(letter => {
                step_method[letter] = [];
                item == 'total' ? step_method[letter] = 0 : null
            })
        });

        const callback_foreach = function(step, i, self){
            i == 1 || i == 2  ? self.push_to_array('skills', step.letter, step.state) : null;
            i == 3 || i == 4  ? self.push_to_array('work_values', step.letter, step.state) : null;
            i == 5 || i == 6  ? self.push_to_array('activities', step.letter, step.state) : null;
            i == 7 || i == 8  ? self.push_to_array('personal_behavior', step.letter, step.state) : null;
            i == 9 || i == 10 ? self.push_to_array('occupations_professions', step.letter, step.state) : null
        };

        //проходим по цыклу с 10 степов (в кажом 3 подстепа) и добавляем  в массив кажждого степа с
        //соотвецтвующими буквами  все выбраные результаты вопросов
        this.cicle(callback_foreach, count_step, 3);

        //делаем пересчет массива и формируем сумму
        Object.keys(step_array).forEach(item => {
            let step_method = step_array[item];
            if(item != 'total'){
                config.letters.forEach(letter => {
                    step_method[letter] = step_method[letter].length == 0
                        ? 0
                        :step_method[letter].reduce((sum, current) => sum + current);
                })
            }
        });
// debugger;
        Object.keys(step_array).forEach(item => {
            config.letters.forEach(letter => {
                step_array.total[letter] += step_array[item][letter]
            })
        });

        return step_array;
    },
    cicle(func, count_i = count_step, count_j = count_in_one_step) {
        const self = this;
        for(let i = 1; i < count_i ;i++){
            for (let j = 0; j < count_j; j++) {
                QuestionStore.getStep(`${i}-${j+1}`).forEach(step => func(step, i, self));
            }
        }
    },
    push_to_array(method, letter, data){
        data && step_array[method][letter].push(data);
    }
}
