
// RouteProvider defaults us to ProjectListCtrl & associates project-list.html as the view.
class ProjectListCtrl {

    public init = ($scope, Project): void => {
        // create a "projects" property on the view, containing the query data.
        $scope.projects = Project.query();
        $scope.orderProp = 'age';

        $scope.overState = this.overState;
        $scope.defaultState = this.defaultState;
    }

    private overState = (id: string) => {
        var element: HTMLElement = this.getObj(id + '-inner');
        element.style.backgroundColor = '#E1E1E1';

        this.show(id + '-details');
        this.hide(id + '-title');
    }

    private defaultState = (id: string) => {
        var element: HTMLElement = this.getObj(id + '-inner');
        element.style.backgroundColor = '#FAFAFA';

        this.hide(id + '-details');
        this.show(id + '-title');
    }

    private getObj(id: string): HTMLElement {
        if (document.getElementById) {
            return document.getElementById(id);
        } else if (document.all) {
            return document.all[id];
        }
        //else if (document.layers) {
        //    return document.layers[name];
        //}
    }

    private hide(id: string): void {
        try {
            var obj = this.getObj(id);
            obj.style.visibility = 'hidden';
        } catch (e) { }
    }
    private show(id: string): void {
        try {
            var obj = this.getObj(id);
            obj.style.visibility = 'visible';
        } catch (e) { }
    }
} 