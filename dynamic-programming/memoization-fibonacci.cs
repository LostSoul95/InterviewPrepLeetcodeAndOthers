using System;
using System.Collections.Generic;

public class Fibonacci
{
    // Dictionary to store computed Fibonacci numbers
    private Dictionary<int, long> memo = new Dictionary<int, long>();

    // Top-down approach with memoization
    public long FibMemo(int n)
    {
        // Visualize current call
        Console.WriteLine($"Calculating Fibonacci({n})");

        // Base cases
        if (n <= 1)
        {
            Console.WriteLine($"Base case: Fibonacci({n}) = {n}");
            return n;
        }

        // Check if already computed
        if (memo.ContainsKey(n))
        {
            Console.WriteLine($"Cache hit! Fibonacci({n}) = {memo[n]}");
            return memo[n];
        }

        // Calculate and store result
        Console.WriteLine($"Computing Fibonacci({n-1}) + Fibonacci({n-2})...");
        memo[n] = FibMemo(n - 1) + FibMemo(n - 2);
        Console.WriteLine($"Memoized: Fibonacci({n}) = {memo[n]}");

        return memo[n];
    }

    // Bottom-up approach with tabulation
    public long FibTab(int n)
    {
        if (n <= 1) return n;

        // Create table for storing results
        var dp = new long[n + 1];
        dp[1] = 1;

        Console.WriteLine("\nBuilding table bottom-up:");
        for (int i = 2; i <= n; i++)
        {
            dp[i] = dp[i - 1] + dp[i - 2];
            Console.WriteLine($"dp[{i}] = {dp[i-1]} + {dp[i-2]} = {dp[i]}");
        }

        return dp[n];
    }

    // Performance comparison between approaches
    public void ComparePerformance(int n)
    {
        Console.WriteLine($"\nPerformance comparison for n = {n}:");

        // Test memoization
        var memoWatch = System.Diagnostics.Stopwatch.StartNew();
        var memoResult = FibMemo(n);
        memoWatch.Stop();

        // Clear memo for fair comparison
        memo.Clear();

        // Test tabulation
        var tabWatch = System.Diagnostics.Stopwatch.StartNew();
        var tabResult = FibTab(n);
        tabWatch.Stop();

        Console.WriteLine("\nResults:");
        Console.WriteLine($"Memoization: {memoResult} (Time: {memoWatch.ElapsedMilliseconds}ms)");
        Console.WriteLine($"Tabulation: {tabResult} (Time: {tabWatch.ElapsedMilliseconds}ms)");
    }

    // Method to display recursion tree (for small numbers)
    public void DisplayRecursionTree(int n)
    {
        memo.Clear();  // Clear previous memoization
        Console.WriteLine($"\nRecursion tree for Fibonacci({n}):");
        
        string indent = "";
        DisplayTree(n, indent);
    }

    private long DisplayTree(int n, string indent)
    {
        Console.WriteLine($"{indent}Computing F({n})");
        
        if (n <= 1)
        {
            Console.WriteLine($"{indent}Base case: F({n}) = {n}");
            return n;
        }

        if (memo.ContainsKey(n))
        {
            Console.WriteLine($"{indent}Cache hit! F({n}) = {memo[n]}");
            return memo[n];
        }

        Console.WriteLine($"{indent}┌─ F({n-1})");
        long left = DisplayTree(n - 1, indent + "│  ");
        
        Console.WriteLine($"{indent}└─ F({n-2})");
        long right = DisplayTree(n - 2, indent + "   ");

        memo[n] = left + right;
        Console.WriteLine($"{indent}F({n}) = {left} + {right} = {memo[n]}");
        
        return memo[n];
    }

    public static void Main()
    {
        var fib = new Fibonacci();

        // Test small number with visualization
        Console.WriteLine("Testing with small number (n=5):");
        fib.DisplayRecursionTree(5);

        // Test performance with larger number
        Console.WriteLine("\nTesting performance with larger number:");
        fib.ComparePerformance(40);

        // Show memoization benefits
        Console.WriteLine("\nDemonstrating memoization benefits:");
        Console.WriteLine("First call to Fibonacci(10):");
        fib.FibMemo(10);
        Console.WriteLine("\nSecond call to Fibonacci(10) (should use cached values):");
        fib.FibMemo(10);
    }
}
