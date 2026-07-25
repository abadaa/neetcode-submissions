class MinStack {
    private ArrayList<Integer> stack;
    private int length;
    private Stack<Integer> minStack;
    private int min;

    public MinStack() {
        stack = new ArrayList<>();
        length = 0;
        minStack = new Stack<>();
        min = Integer.MAX_VALUE;
    }
    
    public void push(int val) {
        stack.add(val);
        length++;
        min = minStack.size() == 0 ? val : min > val ? val : min;
        System.out.println("Min after push: " + min);
        if(minStack.size() > 0) {
            int currentMin = minStack.peek();
            System.out.println("Current min: " + currentMin);
            if(currentMin >= val) {
                System.out.println("Adding new min to the stack: " + min);
                minStack.add(val);
            }
        } else {
            System.out.println("Adding new min to the stack cuz it's empty: " + min);
            minStack.add(val);
        }
    }
    
    public void pop() {
        int toPop = stack.get(length-1);
        stack.remove(length-1);
        length--;
        if(minStack.size() > 0 && toPop == min) {
            minStack.pop();
            min = minStack.size() == 0 ? Integer.MAX_VALUE : minStack.peek();
        }
        System.out.println("min after pop: " + min);
    }
    
    public int top() {
        int retVal = stack.get(length-1);
        return retVal;
    }
    
    public int getMin() {
        for(int i : minStack) {
            System.out.println("Minstack: " + i);
        }
        return minStack.size() > 0 ? minStack.peek() : 0;
    }
}
