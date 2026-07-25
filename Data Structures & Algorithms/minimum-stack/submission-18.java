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
        if(minStack.size() > 0) {
            int currentMin = minStack.peek();
            if(currentMin >= val) {
                minStack.add(val);
            }
        } else {
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
    }
    
    public int top() {
        int retVal = stack.get(length-1);
        return retVal;
    }
    
    public int getMin() {
        return minStack.size() > 0 ? minStack.peek() : 0;
    }
}
