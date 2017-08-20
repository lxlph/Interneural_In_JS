/**
 * Created by Linh Do on 19.08.2017.
 */
/**
 * Created by Linh Do on 16.08.2017.
 */
var nnConfigInfo = makeNnConfigInfo();
function makeNnConfigInfo() {

    var element;
    var callback;

    var learningRate = 0.01;
    var activationFunction = "logistic";
    var maxIterations = 0;


    function init(selector, cb) {
        element = $(selector);
        element.append(createHeader());
        element.append(createNnConfigView());
        callback = cb;
    }

    function createHeader(){
        var header = $('<div/>', {
                text: 'network config info',
                id: "headerNnConfigInfo"
            });
        return header;
    }

    function createNnConfigView(){
        var div = $('<div/>', {
            id: "headerNnConfigView"
        });

        var actFuncInfo = $('<div/>', {
            id: "actFuncInfo",
            text: "activationfunction: " + activationFunction
        }).appendTo(div);

        var divLearnRate = $('<div/>', {
            id: "divLearnRate",
            text: "learning rate: " + learningRate
        }).appendTo(div);

        var divMaxIterations = $('<div/>', {
            id: "divMaxIterations",
            text: "max Iterations: " + maxIterations
        }).appendTo(div);

        return div;
    }

    function setNetworkConfigInfo(info){
        $("#actFuncInfo").text("activationfunction: " + info.activationFunction);
        $("#divLearnRate").text("learning rate: " + info.learningRate);
        $("#divMaxIterations").text("max Iterations: " + info.maxIterations);
    }

    function updateMaxIterationsInfo(maxIterations) {
        $("#divMaxIterations").text("max Iterations: " + maxIterations);
    }


    return {
        init: function (selector, callback) {
            return init(selector, callback)
        },
        setNetworkConfigInfo: function (info) {
            return setNetworkConfigInfo(info)
        },
        updateMaxIterationsInfo: function (msg) {
            return updateMaxIterationsInfo(msg)
        }
    }
}