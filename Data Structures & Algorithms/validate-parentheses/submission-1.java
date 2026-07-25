class Solution {
    public boolean isValid(String s) {
        if(s.length() < 2) {
            return false;
        } else {
            Stack<Character> stack = new Stack<>();
            char[] x = s.toCharArray();
            for(char c : x) {
                if(c == '(') {
                    stack.add(c);
                } else if(c == '{') {
                    stack.add(c);
                } else if(c == '[') {
                    stack.add(c);
                } else if(c == ')') {
                    if(stack.isEmpty() || stack.peek() != '(') {
                        return false;
                    } else {
                        stack.pop();
                    }
                } else if(c == '}') {
                    if(stack.isEmpty() || stack.peek() != '{') {
                        return false;
                    } else {
                        stack.pop();
                    }
                } else {
                    if(stack.isEmpty() || stack.peek() != '[') {
                        return false;
                    } else {
                        stack.pop();
                    }
                }
            }

            return stack.isEmpty();
        }
    }
}
