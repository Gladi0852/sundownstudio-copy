import java.util.Arrays;

public class Test{
    public static void main(String[] args) {
        int arr[] = {5,-2,3,1,2};

        int B = 3;
        int ans = Integer.MIN_VALUE;
        for(int i=0; i<=B; i++){
            int sum = sum(arr, i, B);
            if(ans<sum){
                ans = sum;
            }
        }
        System.out.println(ans);
    }
    // arr = 5,-2,3,1,2             B=total; i=B
    // i = 0               index = 0,1,2   and null         i=0;    i<B-i
    // i = 1               index = 0,1     and 4            i=0;    i<B-i
    // i = 2               index = 0       and 4,3                  i<B-i
    // i = 3               index = null    and 4,3,2                i<B-i


    static int sum(int arr[],int B, int total){
        int totalSum = 0;
        for(int i = 0; i<total-B; i++){
            totalSum+=arr[i];
        }
        for(int i = arr.length-1; i>arr.length-1-B; i--){
            totalSum+=arr[i];
        }
        return totalSum;
    }
}